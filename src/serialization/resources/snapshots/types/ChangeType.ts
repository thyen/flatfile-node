/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ChangeType: core.serialization.Schema<serializers.ChangeType.Raw, Flatfile.ChangeType> =
    core.serialization.enum_(["created", "updated", "deleted"]);

export declare namespace ChangeType {
    type Raw = "created" | "updated" | "deleted";
}