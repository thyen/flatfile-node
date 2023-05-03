/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

export interface UpdateFileRequest {
    workbookId?: Flatfile.WorkbookId;
    /** The storage mode of file to update */
    mode?: Flatfile.Mode;
    /** Status of the file */
    status?: Flatfile.ModelFileStatusEnum;
}
