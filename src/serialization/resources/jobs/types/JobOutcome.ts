/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { JobOutcomeNext } from "./JobOutcomeNext";

export const JobOutcome: core.serialization.ObjectSchema<serializers.JobOutcome.Raw, Flatfile.JobOutcome> =
    core.serialization.object({
        acknowledge: core.serialization.boolean().optional(),
        buttonText: core.serialization.string().optional(),
        next: JobOutcomeNext.optional(),
        heading: core.serialization.string().optional(),
        message: core.serialization.string().optional(),
        hideDefaultButton: core.serialization.boolean().optional(),
    });

export declare namespace JobOutcome {
    interface Raw {
        acknowledge?: boolean | null;
        buttonText?: string | null;
        next?: JobOutcomeNext.Raw | null;
        heading?: string | null;
        message?: string | null;
        hideDefaultButton?: boolean | null;
    }
}
