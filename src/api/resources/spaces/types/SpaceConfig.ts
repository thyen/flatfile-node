/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

/**
 * Properties used to create a new Space
 */
export interface SpaceConfig {
    spaceConfigId?: Flatfile.SpaceConfigId;
    environmentId: Flatfile.EnvironmentId;
    primaryWorkbookId?: Flatfile.WorkbookId;
    /** The name of the space */
    name?: string;
    /** The display order */
    displayOrder?: number;
    /** Metadata for the space */
    metadata?: unknown;
    actions?: Flatfile.Action[];
    guestAuthentication?: Flatfile.GuestAuthenticationEnum[];
    access?: Flatfile.spaces.SpaceAccess[];
    autoConfigure?: boolean;
}
