/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * An execution of an agent
 *
 * @example
 *     {
 *         eventId: "us_evt_YOUR_ID",
 *         success: true,
 *         createdAt: new Date("2022-09-18T00:19:57.007Z"),
 *         completedAt: new Date("2022-09-18T00:20:04.007Z"),
 *         duration: 500,
 *         topic: "space:created"
 *     }
 */
export interface Execution {
    eventId: Flatfile.EventId;
    /** Whether the agent execution was successful */
    success: boolean;
    createdAt: Date;
    completedAt: Date;
    /** The duration of the agent execution */
    duration: number;
    /** The topics of the agent execution */
    topic: string;
}
