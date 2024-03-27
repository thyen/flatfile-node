/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Program } from "./Program";

export const ProgramsResponse: core.serialization.ObjectSchema<
    serializers.ProgramsResponse.Raw,
    Flatfile.ProgramsResponse
> = core.serialization.object({
    data: core.serialization.list(Program),
});

export declare namespace ProgramsResponse {
    interface Raw {
        data: Program.Raw[];
    }
}
