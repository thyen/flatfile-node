/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

export interface CellValue {
    valid?: boolean;
    messages?: Flatfile.ValidationMessage[];
    value?: Flatfile.CellValueUnion;
}
