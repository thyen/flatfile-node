/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.workbooks.addRecordsDeprecated.Request.Raw,
    Flatfile.RecordData[]
> = core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).RecordData));

export declare namespace Request {
    type Raw = serializers.RecordData.Raw[];
}