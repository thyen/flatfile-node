/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             id: "us_fl_YOUR_ID",
 *             name: "Test File",
 *             ext: "png",
 *             mimetype: "image/png",
 *             encoding: "7bit",
 *             status: Flatfile.ModelFileStatusEnum.Partial,
 *             mode: Flatfile.Mode.Import,
 *             size: 81953,
 *             bytesReceived: 81593,
 *             createdAt: new Date("2023-11-15T19:31:33.015Z"),
 *             updatedAt: new Date("2023-11-15T19:31:33.015Z"),
 *             spaceId: "us_sp_YOUR_ID"
 *         }
 *     }
 *
 * @example
 *     {
 *         data: {
 *             id: "us_fl_YOUR_ID",
 *             name: "NewFileName",
 *             ext: "png",
 *             mimetype: "image/png",
 *             encoding: "7bit",
 *             status: Flatfile.ModelFileStatusEnum.Partial,
 *             mode: Flatfile.Mode.Import,
 *             size: 81953,
 *             bytesReceived: 81593,
 *             createdAt: new Date("2023-11-15T19:31:33.015Z"),
 *             updatedAt: new Date("2023-11-15T19:31:33.015Z"),
 *             spaceId: "us_sp_YOUR_ID"
 *         }
 *     }
 */
export interface FileResponse {
    data: Flatfile.File_;
}
