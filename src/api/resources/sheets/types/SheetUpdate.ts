/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Changes to make to an existing sheet
 */
export interface SheetUpdate {
    id?: Flatfile.SheetId;
    workbookId?: Flatfile.WorkbookId;
    name?: string;
    config?: Flatfile.SheetConfig;
    countRecords?: Flatfile.RecordCounts;
    namespace?: string;
    /** Date the sheet was last updated */
    updatedAt?: Date;
    /** Date the sheet was created */
    createdAt?: Date;
}