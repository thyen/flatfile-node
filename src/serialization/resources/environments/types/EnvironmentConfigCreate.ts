/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const EnvironmentConfigCreate: core.serialization.ObjectSchema<
    serializers.EnvironmentConfigCreate.Raw,
    Flatfile.EnvironmentConfigCreate
> = core.serialization.object({
    name: core.serialization.string(),
    isProd: core.serialization.boolean(),
    guestAuthentication: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).GuestAuthenticationEnum))
        .optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    translationsPath: core.serialization.string().optional(),
    namespaces: core.serialization.list(core.serialization.string()).optional(),
    languageOverride: core.serialization.string().optional(),
});

export declare namespace EnvironmentConfigCreate {
    interface Raw {
        name: string;
        isProd: boolean;
        guestAuthentication?: serializers.GuestAuthenticationEnum.Raw[] | null;
        metadata?: Record<string, any> | null;
        translationsPath?: string | null;
        namespaces?: string[] | null;
        languageOverride?: string | null;
    }
}
