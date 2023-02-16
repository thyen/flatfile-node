/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@fern-api/flatfile";

/**
 * Defines a property that should be stored and read as a basic string. Database engines should expect any length of text to be provided here unless explicitly defined in the config.
 */
export interface StringProperty extends Flatfile.BaseProperty {
    config?: Flatfile.StringConfig;
}
