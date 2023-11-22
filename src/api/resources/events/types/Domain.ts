/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The domain of the event
 *
 * @example
 *     Flatfile.Domain.Workbook
 */
export type Domain = "file" | "space" | "workbook" | "job" | "document" | "sheet";

export const Domain = {
    File: "file",
    Space: "space",
    Workbook: "workbook",
    Job: "job",
    Document: "document",
    Sheet: "sheet",
} as const;
