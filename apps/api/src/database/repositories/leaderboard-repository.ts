import {
  and,
  countDistinct,
  count as drizzleCount,
  eq,
  inArray,
  sum,
} from "drizzle-orm";

import { db } from "@/database/db.js";
import { competitions, votes } from "@/database/schema/core/defs.js";
import { agentRank } from "@/database/schema/ranking/defs.js";
import { trades } from "@/database/schema/trading/defs.js";
import { COMPETITION_STATUS, CompetitionType } from "@/types/index.js";

/**
 * Leaderboard Repository
 * Handles database operations for leaderboards
 */

/**
 * Get global statistics for a specific competition type across all relevant competitions.
 * Relevant competitions are those with status 'ended'.
 * @param type The type of competition (e.g., 'trading')
 * @returns Object containing the total number of active agents, trades, volume,
 * competitions, and competition IDs for active or ended competitions.
 */
export async function getGlobalStats(type: CompetitionType): Promise<{
  activeAgents: number;
  totalTrades: number;
  totalVolume: number;
  totalCompetitions: number;
  totalVotes: number;
  competitionIds: string[];
}> {
  console.log("[CompetitionRepository] getGlobalStats called for type:", type);

  // Filter competitions by `type` and `status` IN ['active', 'ended'].
  const relevantCompetitions = await db
    .select({ id: competitions.id })
    .from(competitions)
    .where(
      and(
        eq(competitions.type, type),
        eq(competitions.status, COMPETITION_STATUS.ENDED),
      ),
    );

  if (relevantCompetitions.length === 0) {
    return {
      activeAgents: 0,
      totalTrades: 0,
      totalVolume: 0,
      totalCompetitions: 0,
      totalVotes: 0,
      competitionIds: [],
    };
  }

  const relevantCompetitionIds = relevantCompetitions.map((c) => c.id);

  // Sum up total trades and total volume from these competitions.
  const tradeStatsResult = await db
    .select({
      totalTrades: drizzleCount(trades.id),
      totalVolume: sum(trades.tradeAmountUsd).mapWith(Number),
    })
    .from(trades)
    .where(inArray(trades.competitionId, relevantCompetitionIds));

  const voteStatsResult = await db
    .select({
      totalVotes: drizzleCount(votes.id),
    })
    .from(votes)
    .where(inArray(votes.competitionId, relevantCompetitionIds));

  // TODO: we want to join with the `agents` table and also check the global status == "active",
  // but our existing "global" agent status in `agents` prevents us from doing this.
  // See: https://github.com/recallnet/js-recall/issues/458
  const totalActiveAgents = await db
    .select({
      totalActiveAgents: countDistinct(agentRank.agentId),
    })
    .from(agentRank);

  return {
    activeAgents: totalActiveAgents[0]?.totalActiveAgents ?? 0,
    totalTrades: tradeStatsResult[0]?.totalTrades ?? 0,
    totalVolume: tradeStatsResult[0]?.totalVolume ?? 0,
    totalCompetitions: relevantCompetitions.length,
    totalVotes: voteStatsResult[0]?.totalVotes ?? 0,
    competitionIds: relevantCompetitionIds,
  };
}
