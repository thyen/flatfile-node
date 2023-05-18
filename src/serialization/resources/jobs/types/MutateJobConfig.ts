/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const MutateJobConfig: core.serialization.ObjectSchema<
    serializers.MutateJobConfig.Raw,
    Flatfile.MutateJobConfig
> = core.serialization.object({
    sheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId),
    mutateFunction: core.serialization.string(),
    mutationId: core.serialization.string().optional(),
});

export declare namespace MutateJobConfig {
    interface Raw {
        sheetId: serializers.SheetId.Raw;
        mutateFunction: string;
        mutationId?: string | null;
    }
}
