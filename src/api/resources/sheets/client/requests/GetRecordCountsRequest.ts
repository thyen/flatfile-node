/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface GetRecordCountsRequest {
    versionId?: string;
    sinceVersionId?: Flatfile.VersionId;
    /**
     * Options to filter records
     */
    filter?: Flatfile.Filter;
    filterField?: Flatfile.FilterField;
    searchValue?: Flatfile.SearchValue;
    searchField?: Flatfile.SearchField;
    /**
     * If true, the error counts for each field will also be returned
     */
    byField?: boolean;
    /**
     * An FFQL query used to filter the result set to be counted
     */
    q?: string;
}
