/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Property } from "../../property/types/Property";
import { EnumDetails } from "./EnumDetails";
import { Metadata } from "./Metadata";

export const Edge: core.serialization.ObjectSchema<serializers.Edge.Raw, Flatfile.Edge> = core.serialization.object({
    sourceField: Property,
    destinationField: Property,
    preview: core.serialization.list(core.serialization.string()).optional(),
    enumDetails: EnumDetails.optional(),
    metadata: Metadata.optional(),
});

export declare namespace Edge {
    interface Raw {
        sourceField: Property.Raw;
        destinationField: Property.Raw;
        preview?: string[] | null;
        enumDetails?: EnumDetails.Raw | null;
        metadata?: Metadata.Raw | null;
    }
}
