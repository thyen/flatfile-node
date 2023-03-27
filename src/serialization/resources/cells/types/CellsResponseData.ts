/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const CellsResponseData: core.serialization.Schema<
    serializers.CellsResponseData.Raw,
    Flatfile.CellsResponseData
> = core.serialization.record(
    core.serialization.string(),
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).CellValueWithCounts))
);

export declare namespace CellsResponseData {
    type Raw = Record<string, serializers.CellValueWithCounts.Raw[]>;
}