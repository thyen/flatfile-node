/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CellValue: core.serialization.ObjectSchema<serializers.CellValue.Raw, Flatfile.CellValue> =
    core.serialization.object({
        valid: core.serialization.boolean().optional(),
        messages: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ValidationMessage))
            .optional(),
        value: core.serialization.lazy(async () => (await import("../../..")).CellValueUnion).optional(),
        layer: core.serialization.string().optional(),
        updatedAt: core.serialization.date().optional(),
    });

export declare namespace CellValue {
    interface Raw {
        valid?: boolean | null;
        messages?: serializers.ValidationMessage.Raw[] | null;
        value?: serializers.CellValueUnion.Raw | null;
        layer?: string | null;
        updatedAt?: string | null;
    }
}
