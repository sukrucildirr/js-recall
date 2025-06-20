/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Optional metadata about the agent
 */
export type AgentMetadata = {};

export type PostApiAdminUsersRequest = {
  /**
   * Ethereum wallet address (must start with 0x)
   */
  walletAddress: string;
  /**
   * User's display name
   */
  name?: string | undefined;
  /**
   * User email address
   */
  email?: string | undefined;
  /**
   * URL to the user's profile image
   */
  userImageUrl?: string | undefined;
  /**
   * Name for the user's first agent (optional)
   */
  agentName?: string | undefined;
  /**
   * Description of the agent (optional)
   */
  agentDescription?: string | undefined;
  /**
   * URL to the agent's image (optional)
   */
  agentImageUrl?: string | undefined;
  /**
   * Optional metadata about the agent
   */
  agentMetadata?: AgentMetadata | undefined;
  /**
   * Ethereum wallet address (must start with 0x)
   */
  agentWalletAddress?: string | undefined;
};

/**
 * Optional metadata for the user
 */
export type PostApiAdminUsersUserMetadata = {};

export type PostApiAdminUsersUser = {
  /**
   * User ID
   */
  id?: string | undefined;
  /**
   * User wallet address
   */
  walletAddress?: string | undefined;
  /**
   * User name
   */
  name?: string | undefined;
  /**
   * User email
   */
  email?: string | undefined;
  /**
   * URL to user's image
   */
  imageUrl?: string | null | undefined;
  /**
   * Optional metadata for the user
   */
  metadata?: PostApiAdminUsersUserMetadata | null | undefined;
  /**
   * User status
   */
  status?: string | undefined;
  /**
   * Account creation timestamp
   */
  createdAt?: Date | undefined;
  /**
   * Account updated timestamp
   */
  updatedAt?: Date | undefined;
};

/**
 * Optional metadata for the agent
 */
export type PostApiAdminUsersAgentMetadata = {};

/**
 * Created agent (if agentName was provided)
 */
export type PostApiAdminUsersAgent = {
  /**
   * Agent ID
   */
  id?: string | undefined;
  /**
   * Agent owner ID
   */
  ownerId?: string | undefined;
  /**
   * Agent wallet address
   */
  walletAddress?: string | null | undefined;
  /**
   * Agent name
   */
  name?: string | undefined;
  /**
   * Agent email
   */
  email?: string | null | undefined;
  /**
   * Agent description
   */
  description?: string | null | undefined;
  /**
   * URL to agent's image
   */
  imageUrl?: string | null | undefined;
  /**
   * Optional metadata for the agent
   */
  metadata?: PostApiAdminUsersAgentMetadata | null | undefined;
  /**
   * API key for the agent to use with Bearer authentication. Admin should securely provide this to the user.
   */
  apiKey?: string | undefined;
  /**
   * Agent status
   */
  status?: string | undefined;
  /**
   * Agent creation timestamp
   */
  createdAt?: Date | undefined;
  /**
   * Agent updated timestamp
   */
  updatedAt?: Date | undefined;
};

/**
 * User registered successfully
 */
export type PostApiAdminUsersResponse = {
  /**
   * Operation success status
   */
  success?: boolean | undefined;
  user?: PostApiAdminUsersUser | undefined;
  /**
   * Created agent (if agentName was provided)
   */
  agent?: PostApiAdminUsersAgent | null | undefined;
  /**
   * Error message if agent creation failed
   */
  agentError?: string | null | undefined;
};

/** @internal */
export const AgentMetadata$inboundSchema: z.ZodType<
  AgentMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AgentMetadata$Outbound = {};

/** @internal */
export const AgentMetadata$outboundSchema: z.ZodType<
  AgentMetadata$Outbound,
  z.ZodTypeDef,
  AgentMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentMetadata$ {
  /** @deprecated use `AgentMetadata$inboundSchema` instead. */
  export const inboundSchema = AgentMetadata$inboundSchema;
  /** @deprecated use `AgentMetadata$outboundSchema` instead. */
  export const outboundSchema = AgentMetadata$outboundSchema;
  /** @deprecated use `AgentMetadata$Outbound` instead. */
  export type Outbound = AgentMetadata$Outbound;
}

export function agentMetadataToJSON(agentMetadata: AgentMetadata): string {
  return JSON.stringify(AgentMetadata$outboundSchema.parse(agentMetadata));
}

export function agentMetadataFromJSON(
  jsonString: string,
): SafeParseResult<AgentMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentMetadata' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersRequest$inboundSchema: z.ZodType<
  PostApiAdminUsersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  walletAddress: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  userImageUrl: z.string().optional(),
  agentName: z.string().optional(),
  agentDescription: z.string().optional(),
  agentImageUrl: z.string().optional(),
  agentMetadata: z.lazy(() => AgentMetadata$inboundSchema).optional(),
  agentWalletAddress: z.string().optional(),
});

/** @internal */
export type PostApiAdminUsersRequest$Outbound = {
  walletAddress: string;
  name?: string | undefined;
  email?: string | undefined;
  userImageUrl?: string | undefined;
  agentName?: string | undefined;
  agentDescription?: string | undefined;
  agentImageUrl?: string | undefined;
  agentMetadata?: AgentMetadata$Outbound | undefined;
  agentWalletAddress?: string | undefined;
};

/** @internal */
export const PostApiAdminUsersRequest$outboundSchema: z.ZodType<
  PostApiAdminUsersRequest$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersRequest
> = z.object({
  walletAddress: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  userImageUrl: z.string().optional(),
  agentName: z.string().optional(),
  agentDescription: z.string().optional(),
  agentImageUrl: z.string().optional(),
  agentMetadata: z.lazy(() => AgentMetadata$outboundSchema).optional(),
  agentWalletAddress: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersRequest$ {
  /** @deprecated use `PostApiAdminUsersRequest$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersRequest$inboundSchema;
  /** @deprecated use `PostApiAdminUsersRequest$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersRequest$outboundSchema;
  /** @deprecated use `PostApiAdminUsersRequest$Outbound` instead. */
  export type Outbound = PostApiAdminUsersRequest$Outbound;
}

export function postApiAdminUsersRequestToJSON(
  postApiAdminUsersRequest: PostApiAdminUsersRequest,
): string {
  return JSON.stringify(
    PostApiAdminUsersRequest$outboundSchema.parse(postApiAdminUsersRequest),
  );
}

export function postApiAdminUsersRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersRequest' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersUserMetadata$inboundSchema: z.ZodType<
  PostApiAdminUsersUserMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PostApiAdminUsersUserMetadata$Outbound = {};

/** @internal */
export const PostApiAdminUsersUserMetadata$outboundSchema: z.ZodType<
  PostApiAdminUsersUserMetadata$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersUserMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersUserMetadata$ {
  /** @deprecated use `PostApiAdminUsersUserMetadata$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersUserMetadata$inboundSchema;
  /** @deprecated use `PostApiAdminUsersUserMetadata$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersUserMetadata$outboundSchema;
  /** @deprecated use `PostApiAdminUsersUserMetadata$Outbound` instead. */
  export type Outbound = PostApiAdminUsersUserMetadata$Outbound;
}

export function postApiAdminUsersUserMetadataToJSON(
  postApiAdminUsersUserMetadata: PostApiAdminUsersUserMetadata,
): string {
  return JSON.stringify(
    PostApiAdminUsersUserMetadata$outboundSchema.parse(
      postApiAdminUsersUserMetadata,
    ),
  );
}

export function postApiAdminUsersUserMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersUserMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersUserMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersUserMetadata' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersUser$inboundSchema: z.ZodType<
  PostApiAdminUsersUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  walletAddress: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  imageUrl: z.nullable(z.string()).optional(),
  metadata: z
    .nullable(z.lazy(() => PostApiAdminUsersUserMetadata$inboundSchema))
    .optional(),
  status: z.string().optional(),
  createdAt: z
    .string()
    .datetime({ offset: true })
    .transform((v) => new Date(v))
    .optional(),
  updatedAt: z
    .string()
    .datetime({ offset: true })
    .transform((v) => new Date(v))
    .optional(),
});

/** @internal */
export type PostApiAdminUsersUser$Outbound = {
  id?: string | undefined;
  walletAddress?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  imageUrl?: string | null | undefined;
  metadata?: PostApiAdminUsersUserMetadata$Outbound | null | undefined;
  status?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

/** @internal */
export const PostApiAdminUsersUser$outboundSchema: z.ZodType<
  PostApiAdminUsersUser$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersUser
> = z.object({
  id: z.string().optional(),
  walletAddress: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  imageUrl: z.nullable(z.string()).optional(),
  metadata: z
    .nullable(z.lazy(() => PostApiAdminUsersUserMetadata$outboundSchema))
    .optional(),
  status: z.string().optional(),
  createdAt: z
    .date()
    .transform((v) => v.toISOString())
    .optional(),
  updatedAt: z
    .date()
    .transform((v) => v.toISOString())
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersUser$ {
  /** @deprecated use `PostApiAdminUsersUser$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersUser$inboundSchema;
  /** @deprecated use `PostApiAdminUsersUser$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersUser$outboundSchema;
  /** @deprecated use `PostApiAdminUsersUser$Outbound` instead. */
  export type Outbound = PostApiAdminUsersUser$Outbound;
}

export function postApiAdminUsersUserToJSON(
  postApiAdminUsersUser: PostApiAdminUsersUser,
): string {
  return JSON.stringify(
    PostApiAdminUsersUser$outboundSchema.parse(postApiAdminUsersUser),
  );
}

export function postApiAdminUsersUserFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersUser' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersAgentMetadata$inboundSchema: z.ZodType<
  PostApiAdminUsersAgentMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PostApiAdminUsersAgentMetadata$Outbound = {};

/** @internal */
export const PostApiAdminUsersAgentMetadata$outboundSchema: z.ZodType<
  PostApiAdminUsersAgentMetadata$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersAgentMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersAgentMetadata$ {
  /** @deprecated use `PostApiAdminUsersAgentMetadata$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersAgentMetadata$inboundSchema;
  /** @deprecated use `PostApiAdminUsersAgentMetadata$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersAgentMetadata$outboundSchema;
  /** @deprecated use `PostApiAdminUsersAgentMetadata$Outbound` instead. */
  export type Outbound = PostApiAdminUsersAgentMetadata$Outbound;
}

export function postApiAdminUsersAgentMetadataToJSON(
  postApiAdminUsersAgentMetadata: PostApiAdminUsersAgentMetadata,
): string {
  return JSON.stringify(
    PostApiAdminUsersAgentMetadata$outboundSchema.parse(
      postApiAdminUsersAgentMetadata,
    ),
  );
}

export function postApiAdminUsersAgentMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersAgentMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersAgentMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersAgentMetadata' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersAgent$inboundSchema: z.ZodType<
  PostApiAdminUsersAgent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  ownerId: z.string().optional(),
  walletAddress: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  email: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  imageUrl: z.nullable(z.string()).optional(),
  metadata: z
    .nullable(z.lazy(() => PostApiAdminUsersAgentMetadata$inboundSchema))
    .optional(),
  apiKey: z.string().optional(),
  status: z.string().optional(),
  createdAt: z
    .string()
    .datetime({ offset: true })
    .transform((v) => new Date(v))
    .optional(),
  updatedAt: z
    .string()
    .datetime({ offset: true })
    .transform((v) => new Date(v))
    .optional(),
});

/** @internal */
export type PostApiAdminUsersAgent$Outbound = {
  id?: string | undefined;
  ownerId?: string | undefined;
  walletAddress?: string | null | undefined;
  name?: string | undefined;
  email?: string | null | undefined;
  description?: string | null | undefined;
  imageUrl?: string | null | undefined;
  metadata?: PostApiAdminUsersAgentMetadata$Outbound | null | undefined;
  apiKey?: string | undefined;
  status?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

/** @internal */
export const PostApiAdminUsersAgent$outboundSchema: z.ZodType<
  PostApiAdminUsersAgent$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersAgent
> = z.object({
  id: z.string().optional(),
  ownerId: z.string().optional(),
  walletAddress: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  email: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  imageUrl: z.nullable(z.string()).optional(),
  metadata: z
    .nullable(z.lazy(() => PostApiAdminUsersAgentMetadata$outboundSchema))
    .optional(),
  apiKey: z.string().optional(),
  status: z.string().optional(),
  createdAt: z
    .date()
    .transform((v) => v.toISOString())
    .optional(),
  updatedAt: z
    .date()
    .transform((v) => v.toISOString())
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersAgent$ {
  /** @deprecated use `PostApiAdminUsersAgent$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersAgent$inboundSchema;
  /** @deprecated use `PostApiAdminUsersAgent$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersAgent$outboundSchema;
  /** @deprecated use `PostApiAdminUsersAgent$Outbound` instead. */
  export type Outbound = PostApiAdminUsersAgent$Outbound;
}

export function postApiAdminUsersAgentToJSON(
  postApiAdminUsersAgent: PostApiAdminUsersAgent,
): string {
  return JSON.stringify(
    PostApiAdminUsersAgent$outboundSchema.parse(postApiAdminUsersAgent),
  );
}

export function postApiAdminUsersAgentFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersAgent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersAgent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersAgent' from JSON`,
  );
}

/** @internal */
export const PostApiAdminUsersResponse$inboundSchema: z.ZodType<
  PostApiAdminUsersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  user: z.lazy(() => PostApiAdminUsersUser$inboundSchema).optional(),
  agent: z
    .nullable(z.lazy(() => PostApiAdminUsersAgent$inboundSchema))
    .optional(),
  agentError: z.nullable(z.string()).optional(),
});

/** @internal */
export type PostApiAdminUsersResponse$Outbound = {
  success?: boolean | undefined;
  user?: PostApiAdminUsersUser$Outbound | undefined;
  agent?: PostApiAdminUsersAgent$Outbound | null | undefined;
  agentError?: string | null | undefined;
};

/** @internal */
export const PostApiAdminUsersResponse$outboundSchema: z.ZodType<
  PostApiAdminUsersResponse$Outbound,
  z.ZodTypeDef,
  PostApiAdminUsersResponse
> = z.object({
  success: z.boolean().optional(),
  user: z.lazy(() => PostApiAdminUsersUser$outboundSchema).optional(),
  agent: z
    .nullable(z.lazy(() => PostApiAdminUsersAgent$outboundSchema))
    .optional(),
  agentError: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAdminUsersResponse$ {
  /** @deprecated use `PostApiAdminUsersResponse$inboundSchema` instead. */
  export const inboundSchema = PostApiAdminUsersResponse$inboundSchema;
  /** @deprecated use `PostApiAdminUsersResponse$outboundSchema` instead. */
  export const outboundSchema = PostApiAdminUsersResponse$outboundSchema;
  /** @deprecated use `PostApiAdminUsersResponse$Outbound` instead. */
  export type Outbound = PostApiAdminUsersResponse$Outbound;
}

export function postApiAdminUsersResponseToJSON(
  postApiAdminUsersResponse: PostApiAdminUsersResponse,
): string {
  return JSON.stringify(
    PostApiAdminUsersResponse$outboundSchema.parse(postApiAdminUsersResponse),
  );
}

export function postApiAdminUsersResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostApiAdminUsersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiAdminUsersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiAdminUsersResponse' from JSON`,
  );
}
