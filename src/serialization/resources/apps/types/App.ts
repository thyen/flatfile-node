/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AppId } from "../../commons/types/AppId";
import { AppType } from "./AppType";

export const App: core.serialization.ObjectSchema<serializers.App.Raw, Flatfile.App> = core.serialization.object({
    id: AppId,
    name: core.serialization.string(),
    namespace: core.serialization.string(),
    type: AppType,
    entity: core.serialization.string(),
    entityPlural: core.serialization.string(),
    icon: core.serialization.string().optional(),
    metadata: core.serialization.any(),
    environmentFilters: core.serialization.any(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    deletedAt: core.serialization.date().optional(),
    activatedAt: core.serialization.date().optional(),
});

export declare namespace App {
    interface Raw {
        id: AppId.Raw;
        name: string;
        namespace: string;
        type: AppType.Raw;
        entity: string;
        entityPlural: string;
        icon?: string | null;
        metadata?: any;
        environmentFilters?: any;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string | null;
        activatedAt?: string | null;
    }
}
