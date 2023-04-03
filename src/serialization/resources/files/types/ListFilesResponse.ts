/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const ListFilesResponse: core.serialization.ObjectSchema<
    serializers.ListFilesResponse.Raw,
    Flatfile.ListFilesResponse
> = core.serialization.object({
    pagination: core.serialization.lazyObject(async () => (await import("../../..")).Pagination).optional(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).File)),
});

export declare namespace ListFilesResponse {
    interface Raw {
        pagination?: serializers.Pagination.Raw | null;
        data: serializers.File.Raw[];
    }
}
