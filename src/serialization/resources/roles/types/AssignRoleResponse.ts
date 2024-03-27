/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AssignRoleResponseData } from "./AssignRoleResponseData";

export const AssignRoleResponse: core.serialization.ObjectSchema<
    serializers.AssignRoleResponse.Raw,
    Flatfile.AssignRoleResponse
> = core.serialization.object({
    data: AssignRoleResponseData,
});

export declare namespace AssignRoleResponse {
    interface Raw {
        data: AssignRoleResponseData.Raw;
    }
}
