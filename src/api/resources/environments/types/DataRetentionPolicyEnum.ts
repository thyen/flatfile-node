/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of data retention policy on an environment
 */
export type DataRetentionPolicyEnum = "last_activity" | "since_created";

export const DataRetentionPolicyEnum = {
    LastActivity: "last_activity",
    SinceCreated: "since_created",
} as const;
