/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

/**
 * A collection of one or more sheets
 */
export interface Workbook {
    id: Flatfile.WorkbookId;
    name?: string;
    spaceId: Flatfile.SpaceId;
    environmentId?: Flatfile.EnvironmentId;
    sheets?: Flatfile.Sheet[];
    labels?: string[];
    /** Date the workbook was last updated */
    updatedAt: Date;
    /** Date the workbook was created */
    createdAt: Date;
}
