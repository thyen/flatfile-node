/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface GetEnvironmentAgentLogsRequest {
    environmentId: Flatfile.EnvironmentId;
    spaceId?: Flatfile.SpaceId;
    success?: Flatfile.SuccessQueryParameter;
    pageSize?: Flatfile.PageSize;
    pageNumber?: Flatfile.PageNumber;
}
