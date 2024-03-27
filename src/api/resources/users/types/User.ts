/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Configurations for the user
 *
 * @example
 *     {
 *         id: "us_usr_YOUR_ID",
 *         email: "john.smith@example.com",
 *         name: "john.smith",
 *         accountId: "us_acc_YOUR_ID",
 *         idp: "FRONTEGG",
 *         idpRef: "ab1cf38e-e617-4547-b37d-376a7ac9e554",
 *         metadata: {},
 *         createdAt: new Date("2023-10-30T16:59:45.735Z"),
 *         updatedAt: new Date("2023-10-30T16:59:45.735Z"),
 *         lastSeenAt: new Date("2023-10-30T16:59:45.735Z"),
 *         dashboard: 2
 *     }
 */
export interface User extends Flatfile.UserConfig {
    id: Flatfile.UserId;
    idp: string;
    idpRef?: string;
    metadata: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
    lastSeenAt?: Date;
    dashboard?: number;
}
