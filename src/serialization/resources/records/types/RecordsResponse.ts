/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const RecordsResponse: core.serialization.ObjectSchema<
    serializers.RecordsResponse.Raw,
    Flatfile.RecordsResponse
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).RecordsResponseData),
});

export declare namespace RecordsResponse {
    interface Raw {
        data: serializers.RecordsResponseData.Raw;
    }
}