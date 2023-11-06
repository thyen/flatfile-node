/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ActionConstraintType: core.serialization.Schema<
    serializers.ActionConstraintType.Raw,
    Flatfile.ActionConstraintType
> = core.serialization.enum_(["hasAllValid", "hasSelection"]);

export declare namespace ActionConstraintType {
    type Raw = "hasAllValid" | "hasSelection";
}
