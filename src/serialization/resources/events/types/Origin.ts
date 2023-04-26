/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const Origin: core.serialization.ObjectSchema<serializers.Origin.Raw, Flatfile.Origin> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
    });

export declare namespace Origin {
    interface Raw {
        id?: string | null;
        slug?: string | null;
    }
}