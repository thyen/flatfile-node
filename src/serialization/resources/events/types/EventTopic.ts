/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const EventTopic: core.serialization.Schema<serializers.EventTopic.Raw, Flatfile.EventTopic> =
    core.serialization.enum_([
        "agent:created",
        "agent:updated",
        "agent:deleted",
        "space:created",
        "space:deleted",
        "workbook:created",
        "workbook:updated",
        "workbook:deleted",
        "sheet:created",
        "sheet:updated",
        "sheet:deleted",
        "record:created",
        "record:updated",
        "record:deleted",
        "file:created",
        "file:updated",
        "file:deleted",
        "job:created",
        "job:updated",
        "job:deleted",
        "job:completed",
        "job:failed",
        "commit:created",
        "commit:updated",
        "layer:created",
    ]);

export declare namespace EventTopic {
    type Raw =
        | "agent:created"
        | "agent:updated"
        | "agent:deleted"
        | "space:created"
        | "space:deleted"
        | "workbook:created"
        | "workbook:updated"
        | "workbook:deleted"
        | "sheet:created"
        | "sheet:updated"
        | "sheet:deleted"
        | "record:created"
        | "record:updated"
        | "record:deleted"
        | "file:created"
        | "file:updated"
        | "file:deleted"
        | "job:created"
        | "job:updated"
        | "job:deleted"
        | "job:completed"
        | "job:failed"
        | "commit:created"
        | "commit:updated"
        | "layer:created";
}
