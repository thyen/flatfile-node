/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface BaseEvent {
    /** The domain of the event */
    domain: Flatfile.Domain;
    topic: Flatfile.EventTopic;
    /** The context of the event */
    context: Flatfile.Context;
    /** The attributes of the event */
    attributes?: Flatfile.EventAttributes;
    /** The callback url to acknowledge the event */
    callbackUrl?: string;
    /** The url to retrieve the data associated with the event */
    dataUrl?: string;
    /** Date the event was created */
    createdAt: Date;
    /** Date the event was deleted */
    deletedAt?: Date;
    /** Date the event was acknowledged */
    acknowledgedAt?: string;
    /** The actor (user or system) who acknowledged the event */
    acknowledgedBy?: string;
    target?: string;
    origin?: Flatfile.Origin;
}
