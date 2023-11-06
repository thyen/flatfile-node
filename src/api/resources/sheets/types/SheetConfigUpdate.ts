/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Changes to make to an existing sheet config
 */
export interface SheetConfigUpdate {
    name?: string;
    description?: string;
    slug?: string;
    readonly?: boolean;
    allowAdditionalFields?: boolean;
    mappingConfidenceThreshold?: number;
    access?: Flatfile.SheetAccess[];
    fields?: Flatfile.Property[];
    actions?: Flatfile.Action[];
}