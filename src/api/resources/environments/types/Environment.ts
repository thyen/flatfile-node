/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * @example
 *     {
 *         name: "dev",
 *         isProd: false,
 *         guestAuthentication: [Flatfile.GuestAuthentication.MagicLink],
 *         id: "us_env_hVXkXs0b",
 *         accountId: "us_acc_uj6s91wc"
 *     }
 */
export interface Environment extends Flatfile.EnvironmentConfig {
    id: Flatfile.EnvironmentId;
    accountId?: Flatfile.AccountId;
}
