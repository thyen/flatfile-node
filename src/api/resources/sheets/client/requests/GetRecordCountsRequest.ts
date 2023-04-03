/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

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
}
