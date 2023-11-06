/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SheetConfig: core.serialization.ObjectSchema<serializers.SheetConfig.Raw, Flatfile.SheetConfig> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
        readonly: core.serialization.boolean().optional(),
        allowAdditionalFields: core.serialization.boolean().optional(),
        mappingConfidenceThreshold: core.serialization.number().optional(),
        access: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).SheetAccess))
            .optional(),
        fields: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).Property)),
        actions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Action))
            .optional(),
    });

export declare namespace SheetConfig {
    interface Raw {
        name: string;
        description?: string | null;
        slug?: string | null;
        readonly?: boolean | null;
        allowAdditionalFields?: boolean | null;
        mappingConfidenceThreshold?: number | null;
        access?: serializers.SheetAccess.Raw[] | null;
        fields: serializers.Property.Raw[];
        actions?: serializers.Action.Raw[] | null;
    }
}
