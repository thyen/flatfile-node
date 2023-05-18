/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface BaseProperty {
    key: string;
    /** User friendly field name */
    label?: string;
    description?: string;
    constraints?: Flatfile.Constraint[];
    readonly?: boolean;
    /** Useful for any contextual metadata regarding the schema. Store any valid json here. */
    metadata?: unknown;
}
