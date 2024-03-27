/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { ReferencePropertyConfig } from "./ReferencePropertyConfig";
import { BaseProperty } from "./BaseProperty";
import { ArrayableProperty } from "./ArrayableProperty";

export const ReferenceProperty: core.serialization.ObjectSchema<
    serializers.ReferenceProperty.Raw,
    Flatfile.ReferenceProperty
> = core.serialization
    .object({
        config: ReferencePropertyConfig,
    })
    .extend(BaseProperty)
    .extend(ArrayableProperty);

export declare namespace ReferenceProperty {
    interface Raw extends BaseProperty.Raw, ArrayableProperty.Raw {
        config: ReferencePropertyConfig.Raw;
    }
}
