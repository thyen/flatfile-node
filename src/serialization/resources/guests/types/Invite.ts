/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { GuestId } from "../../commons/types/GuestId";
import { SpaceId } from "../../commons/types/SpaceId";

export const Invite: core.serialization.ObjectSchema<serializers.Invite.Raw, Flatfile.Invite> =
    core.serialization.object({
        guestId: GuestId,
        spaceId: SpaceId,
        fromName: core.serialization.string().optional(),
        message: core.serialization.string().optional(),
    });

export declare namespace Invite {
    interface Raw {
        guestId: GuestId.Raw;
        spaceId: SpaceId.Raw;
        fromName?: string | null;
        message?: string | null;
    }
}
