/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { UserId } from "../../commons/types/UserId";
import { AgentId } from "../../commons/types/AgentId";
import { GuestId } from "../../commons/types/GuestId";

export const ActorIdUnion: core.serialization.Schema<serializers.ActorIdUnion.Raw, Flatfile.ActorIdUnion> =
    core.serialization.undiscriminatedUnion([UserId, AgentId, GuestId]);

export declare namespace ActorIdUnion {
    type Raw = UserId.Raw | AgentId.Raw | GuestId.Raw;
}
