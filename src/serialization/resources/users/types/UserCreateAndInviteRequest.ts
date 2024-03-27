/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AssignActorRoleRequest } from "../../roles/types/AssignActorRoleRequest";

export const UserCreateAndInviteRequest: core.serialization.ObjectSchema<
    serializers.UserCreateAndInviteRequest.Raw,
    Flatfile.UserCreateAndInviteRequest
> = core.serialization.object({
    email: core.serialization.string(),
    name: core.serialization.string(),
    actorRoles: core.serialization.list(AssignActorRoleRequest),
});

export declare namespace UserCreateAndInviteRequest {
    interface Raw {
        email: string;
        name: string;
        actorRoles: AssignActorRoleRequest.Raw[];
    }
}
