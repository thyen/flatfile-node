/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AssignRoleResponse: core.serialization.ObjectSchema<
    serializers.AssignRoleResponse.Raw,
    Flatfile.AssignRoleResponse
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).AssignRoleResponseData),
});

export declare namespace AssignRoleResponse {
    interface Raw {
        data: serializers.AssignRoleResponseData.Raw;
    }
}
