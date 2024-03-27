/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Progress } from "./Progress";

export const EventAttributes: core.serialization.ObjectSchema<
    serializers.EventAttributes.Raw,
    Flatfile.EventAttributes
> = core.serialization.object({
    targetUpdatedAt: core.serialization.date().optional(),
    progress: Progress.optional(),
});

export declare namespace EventAttributes {
    interface Raw {
        targetUpdatedAt?: string | null;
        progress?: Progress.Raw | null;
    }
}
