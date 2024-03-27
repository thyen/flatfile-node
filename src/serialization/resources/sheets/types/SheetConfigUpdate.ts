/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SheetAccess } from "./SheetAccess";
import { Property } from "../../property/types/Property";
import { Action } from "../../commons/types/Action";

export const SheetConfigUpdate: core.serialization.ObjectSchema<
    serializers.SheetConfigUpdate.Raw,
    Flatfile.SheetConfigUpdate
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    readonly: core.serialization.boolean().optional(),
    allowAdditionalFields: core.serialization.boolean().optional(),
    mappingConfidenceThreshold: core.serialization.number().optional(),
    access: core.serialization.list(SheetAccess).optional(),
    fields: core.serialization.list(Property).optional(),
    actions: core.serialization.list(Action).optional(),
});

export declare namespace SheetConfigUpdate {
    interface Raw {
        name?: string | null;
        description?: string | null;
        slug?: string | null;
        readonly?: boolean | null;
        allowAdditionalFields?: boolean | null;
        mappingConfidenceThreshold?: number | null;
        access?: SheetAccess.Raw[] | null;
        fields?: Property.Raw[] | null;
        actions?: Action.Raw[] | null;
    }
}
