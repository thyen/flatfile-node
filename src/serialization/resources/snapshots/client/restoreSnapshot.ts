/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { RestoreOptions } from "../types/RestoreOptions";

export const Request: core.serialization.Schema<
    serializers.snapshots.restoreSnapshot.Request.Raw,
    Flatfile.RestoreOptions | undefined
> = RestoreOptions.optional();

export declare namespace Request {
    type Raw = RestoreOptions.Raw | null | undefined;
}
