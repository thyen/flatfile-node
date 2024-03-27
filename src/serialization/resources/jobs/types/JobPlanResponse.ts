/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { JobPlan } from "./JobPlan";

export const JobPlanResponse: core.serialization.ObjectSchema<
    serializers.JobPlanResponse.Raw,
    Flatfile.JobPlanResponse
> = core.serialization.object({
    data: JobPlan,
});

export declare namespace JobPlanResponse {
    interface Raw {
        data: JobPlan.Raw;
    }
}
