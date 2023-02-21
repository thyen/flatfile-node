/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const ListGuestsResponse: core.serialization.ObjectSchema<
    serializers.ListGuestsResponse.Raw,
    Flatfile.ListGuestsResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Guest)),
});

export declare namespace ListGuestsResponse {
    interface Raw {
        data: serializers.Guest.Raw[];
    }
}
