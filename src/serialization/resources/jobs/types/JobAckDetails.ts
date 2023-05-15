/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobAckDetails: core.serialization.ObjectSchema<serializers.JobAckDetails.Raw, Flatfile.JobAckDetails> =
    core.serialization.object({
        info: core.serialization.string().optional(),
        progress: core.serialization.number().optional(),
    });

export declare namespace JobAckDetails {
    interface Raw {
        info?: string | null;
        progress?: number | null;
    }
}
