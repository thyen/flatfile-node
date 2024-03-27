/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Domain } from "./Domain";
import { Context } from "./Context";
import { EventAttributes } from "./EventAttributes";
import { Origin } from "./Origin";

export const BaseEvent: core.serialization.ObjectSchema<serializers.BaseEvent.Raw, Flatfile.BaseEvent> =
    core.serialization.object({
        domain: Domain,
        context: Context,
        attributes: EventAttributes.optional(),
        callbackUrl: core.serialization.string().optional(),
        dataUrl: core.serialization.string().optional(),
        target: core.serialization.string().optional(),
        origin: Origin.optional(),
        namespaces: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace BaseEvent {
    interface Raw {
        domain: Domain.Raw;
        context: Context.Raw;
        attributes?: EventAttributes.Raw | null;
        callbackUrl?: string | null;
        dataUrl?: string | null;
        target?: string | null;
        origin?: Origin.Raw | null;
        namespaces?: string[] | null;
    }
}
