/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Info about the reason the job was split
 */
export interface JobSplitDetails {
    parts: Flatfile.JobParts;
    runInParallel?: boolean;
}
