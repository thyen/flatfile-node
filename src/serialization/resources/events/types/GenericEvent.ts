/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { EventId } from "../../commons/types/EventId";
import { BaseEvent } from "./BaseEvent";

export const GenericEvent: core.serialization.ObjectSchema<serializers.GenericEvent.Raw, Flatfile.GenericEvent> =
    core.serialization
        .object({
            id: EventId,
            createdAt: core.serialization.date(),
            deletedAt: core.serialization.date().optional(),
            acknowledgedAt: core.serialization.date().optional(),
            acknowledgedBy: core.serialization.string().optional(),
            payload: core.serialization.record(core.serialization.string(), core.serialization.any()),
        })
        .extend(BaseEvent);

export declare namespace GenericEvent {
    interface Raw extends BaseEvent.Raw {
        id: EventId.Raw;
        createdAt: string;
        deletedAt?: string | null;
        acknowledgedAt?: string | null;
        acknowledgedBy?: string | null;
        payload: Record<string, any>;
    }
}
