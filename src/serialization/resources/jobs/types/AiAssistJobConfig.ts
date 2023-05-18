/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AiAssistJobConfig: core.serialization.ObjectSchema<
    serializers.AiAssistJobConfig.Raw,
    Flatfile.AiAssistJobConfig
> = core.serialization.object({
    model: core.serialization.string(),
    command: core.serialization.string(),
    modelParams: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    mutateRecord: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace AiAssistJobConfig {
    interface Raw {
        model: string;
        command: string;
        modelParams?: Record<string, unknown> | null;
        mutateRecord?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}