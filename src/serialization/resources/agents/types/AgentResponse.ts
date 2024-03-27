/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Agent } from "./Agent";

export const AgentResponse: core.serialization.ObjectSchema<serializers.AgentResponse.Raw, Flatfile.AgentResponse> =
    core.serialization.object({
        data: Agent.optional(),
    });

export declare namespace AgentResponse {
    interface Raw {
        data?: Agent.Raw | null;
    }
}
