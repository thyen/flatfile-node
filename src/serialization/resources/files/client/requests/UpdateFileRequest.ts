/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";
import { WorkbookId } from "../../../commons/types/WorkbookId";
import { Mode } from "../../types/Mode";
import { ModelFileStatusEnum } from "../../types/ModelFileStatusEnum";
import { Action } from "../../../commons/types/Action";

export const UpdateFileRequest: core.serialization.Schema<
    serializers.UpdateFileRequest.Raw,
    Flatfile.UpdateFileRequest
> = core.serialization.object({
    workbookId: WorkbookId.optional(),
    name: core.serialization.string().optional(),
    mode: Mode.optional(),
    status: ModelFileStatusEnum.optional(),
    actions: core.serialization.list(Action).optional(),
});

export declare namespace UpdateFileRequest {
    interface Raw {
        workbookId?: WorkbookId.Raw | null;
        name?: string | null;
        mode?: Mode.Raw | null;
        status?: ModelFileStatusEnum.Raw | null;
        actions?: Action.Raw[] | null;
    }
}
