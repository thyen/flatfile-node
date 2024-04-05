/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * An account
 *
 * @example
 *     {
 *         id: "us_acc_YOUR_ID",
 *         name: "MyAccountName",
 *         metadata: {},
 *         createdAt: new Date("2023-10-30T16:59:45.735Z"),
 *         updatedAt: new Date("2023-10-30T16:59:45.735Z")
 *     }
 */
export interface Account {
    id: Flatfile.AccountId;
    name: string;
    subdomain?: string;
    vanityDomainDashboard?: string;
    vanityDomainSpaces?: string;
    embeddedDomainWhitelist?: string[];
    customFromEmail?: string;
    stripeCustomerId?: string;
    metadata: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
    defaultAppId?: Flatfile.AppId;
}