/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * A document (markdown components) belong to a space
 *
 * @example
 *     {
 *         id: "us_dc_YOUR_ID",
 *         spaceId: "us_sp_YOUR_ID",
 *         environmentId: "us_env_YOUR_ID",
 *         title: "My Document 1",
 *         body: "My information",
 *         treatments: [],
 *         actions: [{
 *                 operation: "submitAction",
 *                 mode: Flatfile.ActionMode.Foreground,
 *                 label: "Submit",
 *                 description: "Submit data to webhook.site",
 *                 primary: true
 *             }],
 *         createdAt: new Date("2022-09-18T00:19:57.007Z"),
 *         updatedAt: new Date("2022-09-18T00:19:57.007Z")
 *     }
 *
 * @example
 *     {
 *         id: "us_dc_YOUR_ID",
 *         spaceId: "us_sp_YOUR_ID",
 *         environmentId: "us_env_YOUR_ID",
 *         title: "Updated Title",
 *         body: "Updated My information",
 *         treatments: [],
 *         actions: [{
 *                 operation: "submitAction",
 *                 mode: Flatfile.ActionMode.Foreground,
 *                 label: "Submit",
 *                 description: "Submit data to webhook.site",
 *                 primary: true
 *             }],
 *         createdAt: new Date("2022-09-18T00:19:57.007Z"),
 *         updatedAt: new Date("2022-09-18T00:19:57.007Z")
 *     }
 */
export interface Document extends Flatfile.DocumentConfig {
    id: Flatfile.DocumentId;
    spaceId?: Flatfile.SpaceId;
    environmentId?: Flatfile.EnvironmentId;
    /** Date the document was created */
    createdAt: Date;
    /** Date the document was last updated */
    updatedAt: Date;
}
