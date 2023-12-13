/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The topic of the event
 *
 * @example
 *     Flatfile.EventTopic.WorkbookUpdated
 */
export type EventTopic =
    | "agent:created"
    | "agent:updated"
    | "agent:deleted"
    | "space:created"
    | "space:updated"
    | "space:deleted"
    | "space:expired"
    | "document:created"
    | "document:updated"
    | "document:deleted"
    | "workbook:created"
    | "workbook:updated"
    | "workbook:deleted"
    | "workbook:expired"
    | "sheet:created"
    | "sheet:updated"
    | "sheet:deleted"
    | "snapshot:created"
    | "records:created"
    | "records:updated"
    | "records:deleted"
    | "file:created"
    | "file:updated"
    | "file:deleted"
    | "file:expired"
    | "job:created"
    | "job:updated"
    | "job:deleted"
    | "job:completed"
    | "job:ready"
    | "job:scheduled"
    | "job:outcome-acknowledged"
    | "job:parts-completed"
    | "job:failed"
    | "program:created"
    | "program:updated"
    | "commit:created"
    | "commit:updated"
    | "commit:completed"
    | "layer:created";

export const EventTopic = {
    AgentCreated: "agent:created",
    AgentUpdated: "agent:updated",
    AgentDeleted: "agent:deleted",
    SpaceCreated: "space:created",
    SpaceUpdated: "space:updated",
    SpaceDeleted: "space:deleted",
    SpaceExpired: "space:expired",
    DocumentCreated: "document:created",
    DocumentUpdated: "document:updated",
    DocumentDeleted: "document:deleted",
    WorkbookCreated: "workbook:created",
    WorkbookUpdated: "workbook:updated",
    WorkbookDeleted: "workbook:deleted",
    WorkbookExpired: "workbook:expired",
    SheetCreated: "sheet:created",
    SheetUpdated: "sheet:updated",
    SheetDeleted: "sheet:deleted",
    SnapshotCreated: "snapshot:created",
    RecordsCreated: "records:created",
    RecordsUpdated: "records:updated",
    RecordsDeleted: "records:deleted",
    FileCreated: "file:created",
    FileUpdated: "file:updated",
    FileDeleted: "file:deleted",
    FileExpired: "file:expired",
    JobCreated: "job:created",
    JobUpdated: "job:updated",
    JobDeleted: "job:deleted",
    JobCompleted: "job:completed",
    JobReady: "job:ready",
    JobScheduled: "job:scheduled",
    JobOutcomeAcknowledged: "job:outcome-acknowledged",
    JobPartsCompleted: "job:parts-completed",
    JobFailed: "job:failed",
    ProgramCreated: "program:created",
    ProgramUpdated: "program:updated",
    CommitCreated: "commit:created",
    CommitUpdated: "commit:updated",
    CommitCompleted: "commit:completed",
    LayerCreated: "layer:created",
} as const;
