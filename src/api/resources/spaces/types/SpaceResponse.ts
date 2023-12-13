/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             id: "us_sp_YOUR_ID",
 *             name: "My First Worbook",
 *             displayOrder: 1,
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z"),
 *             lastActivityAt: new Date("2021-01-01T00:00:00.000Z"),
 *             createdByUserId: "us_usr_YOUR_ID",
 *             workbooksCount: 1,
 *             filesCount: 1,
 *             isCollaborative: true,
 *             upgradedAt: new Date("2021-01-01T00:00:00.000Z"),
 *             guestAuthentication: [Flatfile.GuestAuthenticationEnum.MagicLink, Flatfile.GuestAuthenticationEnum.SharedLink],
 *             environmentId: "us_env_YOUR_ID",
 *             primaryWorkbookId: "us_wb_YOUR_ID",
 *             labels: [],
 *             metadata: undefined
 *         }
 *     }
 *
 * @example
 *     {
 *         data: {
 *             id: "us_sp_YOUR_ID",
 *             name: "My Updated Worbook",
 *             displayOrder: 1,
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z"),
 *             lastActivityAt: new Date("2021-01-01T00:00:00.000Z"),
 *             createdByUserId: "us_usr_YOUR_ID",
 *             workbooksCount: 1,
 *             filesCount: 1,
 *             isCollaborative: true,
 *             upgradedAt: new Date("2021-01-01T00:00:00.000Z"),
 *             guestAuthentication: [Flatfile.GuestAuthenticationEnum.MagicLink, Flatfile.GuestAuthenticationEnum.SharedLink],
 *             environmentId: "us_env_YOUR_ID",
 *             primaryWorkbookId: "us_wb_YOUR_ID",
 *             labels: [],
 *             metadata: undefined
 *         }
 *     }
 */
export interface SpaceResponse {
    data: Flatfile.Space;
}
