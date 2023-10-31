/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const InternalSpaceConfigBase: core.serialization.ObjectSchema<
    serializers.InternalSpaceConfigBase.Raw,
    Flatfile.InternalSpaceConfigBase
> = core.serialization.object({
    spaceConfigId: core.serialization.lazy(async () => (await import("../../..")).SpaceConfigId).optional(),
    environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId).optional(),
    primaryWorkbookId: core.serialization.lazy(async () => (await import("../../..")).WorkbookId).optional(),
    metadata: core.serialization.any().optional(),
    actions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Action))
        .optional(),
    access: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).SpaceAccess))
        .optional(),
    autoConfigure: core.serialization.boolean().optional(),
    namespace: core.serialization.string().optional(),
    labels: core.serialization.list(core.serialization.string()).optional(),
    translationsPath: core.serialization.string().optional(),
    languageOverride: core.serialization.string().optional(),
    archivedAt: core.serialization.date().optional(),
});

export declare namespace InternalSpaceConfigBase {
    interface Raw {
        spaceConfigId?: serializers.SpaceConfigId.Raw | null;
        environmentId?: serializers.EnvironmentId.Raw | null;
        primaryWorkbookId?: serializers.WorkbookId.Raw | null;
        metadata?: any | null;
        actions?: serializers.Action.Raw[] | null;
        access?: serializers.SpaceAccess.Raw[] | null;
        autoConfigure?: boolean | null;
        namespace?: string | null;
        labels?: string[] | null;
        translationsPath?: string | null;
        languageOverride?: string | null;
        archivedAt?: string | null;
    }
}
