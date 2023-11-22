/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface ListJobsRequest {
    environmentId?: Flatfile.EnvironmentId;
    spaceId?: Flatfile.SpaceId;
    workbookId?: Flatfile.WorkbookId;
    fileId?: Flatfile.FileId;
    parentId?: Flatfile.JobId;
    /**
     * Number of jobs to return in a page (default 20)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of jobs to return
     */
    pageNumber?: number;
    sortDirection?: Flatfile.SortDirection;
}
