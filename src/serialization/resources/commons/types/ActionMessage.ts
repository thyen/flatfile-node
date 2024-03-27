/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { ActionMessageType } from "./ActionMessageType";

export const ActionMessage: core.serialization.ObjectSchema<serializers.ActionMessage.Raw, Flatfile.ActionMessage> =
    core.serialization.object({
        type: ActionMessageType,
        content: core.serialization.string(),
    });

export declare namespace ActionMessage {
    interface Raw {
        type: ActionMessageType.Raw;
        content: string;
    }
}
