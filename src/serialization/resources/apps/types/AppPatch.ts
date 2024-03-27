/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AppPatch: core.serialization.ObjectSchema<serializers.AppPatch.Raw, Flatfile.AppPatch> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        namespace: core.serialization.string().optional(),
        entity: core.serialization.string().optional(),
        entityPlural: core.serialization.string().optional(),
        icon: core.serialization.string().optional(),
        metadata: core.serialization.any().optional(),
        environmentFilters: core.serialization.any().optional(),
        activatedAt: core.serialization.date().optional(),
    });

export declare namespace AppPatch {
    interface Raw {
        name?: string | null;
        namespace?: string | null;
        entity?: string | null;
        entityPlural?: string | null;
        icon?: string | null;
        metadata?: any | null;
        environmentFilters?: any | null;
        activatedAt?: string | null;
    }
}
