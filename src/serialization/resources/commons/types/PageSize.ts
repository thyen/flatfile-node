/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const PageSize: core.serialization.Schema<serializers.PageSize.Raw, Flatfile.PageSize> =
    core.serialization.number();

export declare namespace PageSize {
    type Raw = number;
}
