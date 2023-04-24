/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const ExportJobConfig: core.serialization.ObjectSchema<
    serializers.ExportJobConfig.Raw,
    Flatfile.ExportJobConfig
> = core.serialization.object({
    options: core.serialization.lazyObject(async () => (await import("../../..")).ExportOptions),
});

export declare namespace ExportJobConfig {
    interface Raw {
        options: serializers.ExportOptions.Raw;
    }
}