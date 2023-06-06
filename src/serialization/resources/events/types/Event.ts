/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Event: core.serialization.Schema<serializers.Event.Raw, Flatfile.Event> = core.serialization
    .union("type", {
        "space:added": core.serialization.lazyObject(async () => (await import("../../..")).SpaceAddedEvent),
        "space:removed": core.serialization.lazyObject(async () => (await import("../../..")).SpaceRemovedEvent),
        "workbook:added": core.serialization.lazyObject(async () => (await import("../../..")).WorkbookAddedEvent),
        "workbook:updated": core.serialization.lazyObject(async () => (await import("../../..")).WorkbookUpdatedEvent),
        "workbook:removed": core.serialization.lazyObject(async () => (await import("../../..")).WorkbookRemovedEvent),
        "user:added": core.serialization.lazyObject(async () => (await import("../../..")).UserAddedEvent),
        "user:removed": core.serialization.lazyObject(async () => (await import("../../..")).UserRemovedEvent),
        "user:online": core.serialization.lazyObject(async () => (await import("../../..")).UserOnlineEvent),
        "user:offline": core.serialization.lazyObject(async () => (await import("../../..")).UserOfflineEvent),
        "upload:started": core.serialization.lazyObject(async () => (await import("../../..")).UploadStartedEvent),
        "upload:failed": core.serialization.lazyObject(async () => (await import("../../..")).UploadFailedEvent),
        "upload:completed": core.serialization.lazyObject(async () => (await import("../../..")).UploadCompletedEvent),
        "job:started": core.serialization.lazyObject(async () => (await import("../../..")).JobStartedEvent),
        "job:waiting": core.serialization.lazyObject(async () => (await import("../../..")).JobWaitingEvent),
        "job:updated": core.serialization.lazyObject(async () => (await import("../../..")).JobUpdatedEvent),
        "job:failed": core.serialization.lazyObject(async () => (await import("../../..")).JobFailedEvent),
        "job:completed": core.serialization.lazyObject(async () => (await import("../../..")).JobCompletedEvent),
        "job:deleted": core.serialization.lazyObject(async () => (await import("../../..")).JobDeletedEvent),
        "records:created": core.serialization.lazyObject(async () => (await import("../../..")).RecordsCreatedEvent),
        "records:updated": core.serialization.lazyObject(async () => (await import("../../..")).RecordsUpdatedEvent),
        "records:deleted": core.serialization.lazyObject(async () => (await import("../../..")).RecordsDeletedEvent),
        "sheet:validated": core.serialization.lazyObject(async () => (await import("../../..")).SheetValidatedEvent),
        "action:triggered": core.serialization.lazyObject(async () => (await import("../../..")).ActionTriggeredEvent),
        "file:deleted": core.serialization.lazyObject(async () => (await import("../../..")).FileDeletedEvent),
        "client:init": core.serialization.lazyObject(async () => (await import("../../..")).ClientInitializedEvent),
    })
    .transform<Flatfile.Event>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Event {
    type Raw =
        | Event.SpaceAdded
        | Event.SpaceRemoved
        | Event.WorkbookAdded
        | Event.WorkbookUpdated
        | Event.WorkbookRemoved
        | Event.UserAdded
        | Event.UserRemoved
        | Event.UserOnline
        | Event.UserOffline
        | Event.UploadStarted
        | Event.UploadFailed
        | Event.UploadCompleted
        | Event.JobStarted
        | Event.JobWaiting
        | Event.JobUpdated
        | Event.JobFailed
        | Event.JobCompleted
        | Event.JobDeleted
        | Event.RecordsCreated
        | Event.RecordsUpdated
        | Event.RecordsDeleted
        | Event.SheetValidated
        | Event.ActionTriggered
        | Event.FileDeleted
        | Event.ClientInitialized;

    interface SpaceAdded extends serializers.SpaceAddedEvent.Raw {
        type: "space:added";
    }

    interface SpaceRemoved extends serializers.SpaceRemovedEvent.Raw {
        type: "space:removed";
    }

    interface WorkbookAdded extends serializers.WorkbookAddedEvent.Raw {
        type: "workbook:added";
    }

    interface WorkbookUpdated extends serializers.WorkbookUpdatedEvent.Raw {
        type: "workbook:updated";
    }

    interface WorkbookRemoved extends serializers.WorkbookRemovedEvent.Raw {
        type: "workbook:removed";
    }

    interface UserAdded extends serializers.UserAddedEvent.Raw {
        type: "user:added";
    }

    interface UserRemoved extends serializers.UserRemovedEvent.Raw {
        type: "user:removed";
    }

    interface UserOnline extends serializers.UserOnlineEvent.Raw {
        type: "user:online";
    }

    interface UserOffline extends serializers.UserOfflineEvent.Raw {
        type: "user:offline";
    }

    interface UploadStarted extends serializers.UploadStartedEvent.Raw {
        type: "upload:started";
    }

    interface UploadFailed extends serializers.UploadFailedEvent.Raw {
        type: "upload:failed";
    }

    interface UploadCompleted extends serializers.UploadCompletedEvent.Raw {
        type: "upload:completed";
    }

    interface JobStarted extends serializers.JobStartedEvent.Raw {
        type: "job:started";
    }

    interface JobWaiting extends serializers.JobWaitingEvent.Raw {
        type: "job:waiting";
    }

    interface JobUpdated extends serializers.JobUpdatedEvent.Raw {
        type: "job:updated";
    }

    interface JobFailed extends serializers.JobFailedEvent.Raw {
        type: "job:failed";
    }

    interface JobCompleted extends serializers.JobCompletedEvent.Raw {
        type: "job:completed";
    }

    interface JobDeleted extends serializers.JobDeletedEvent.Raw {
        type: "job:deleted";
    }

    interface RecordsCreated extends serializers.RecordsCreatedEvent.Raw {
        type: "records:created";
    }

    interface RecordsUpdated extends serializers.RecordsUpdatedEvent.Raw {
        type: "records:updated";
    }

    interface RecordsDeleted extends serializers.RecordsDeletedEvent.Raw {
        type: "records:deleted";
    }

    interface SheetValidated extends serializers.SheetValidatedEvent.Raw {
        type: "sheet:validated";
    }

    interface ActionTriggered extends serializers.ActionTriggeredEvent.Raw {
        type: "action:triggered";
    }

    interface FileDeleted extends serializers.FileDeletedEvent.Raw {
        type: "file:deleted";
    }

    interface ClientInitialized extends serializers.ClientInitializedEvent.Raw {
        type: "client:init";
    }
}
