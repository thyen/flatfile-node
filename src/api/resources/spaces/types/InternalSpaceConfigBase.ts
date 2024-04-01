/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface InternalSpaceConfigBase {
    spaceConfigId?: Flatfile.SpaceConfigId;
    environmentId?: Flatfile.EnvironmentId;
    primaryWorkbookId?: Flatfile.WorkbookId;
    /** Metadata for the space */
    metadata?: any;
    actions?: Flatfile.Action[];
    access?: Flatfile.SpaceAccess[];
    autoConfigure?: boolean;
    namespace?: string;
    labels?: string[];
    translationsPath?: string;
    languageOverride?: string;
    /** Date when space was archived */
    archivedAt?: Date;
    /** The ID of the App that space is associated with */
    appId?: Flatfile.AppId;
}
