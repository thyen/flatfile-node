/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { UserId } from "./UserId";
import { AccountId } from "./AccountId";

export const AccessToken: core.serialization.ObjectSchema<serializers.AccessToken.Raw, Flatfile.AccessToken> =
    core.serialization.object({
        accessToken: core.serialization.string(),
        expiresIn: core.serialization.string(),
        expires: core.serialization.string(),
        email: core.serialization.string().optional(),
        userId: UserId.optional(),
        accountId: AccountId.optional(),
    });

export declare namespace AccessToken {
    interface Raw {
        accessToken: string;
        expiresIn: string;
        expires: string;
        email?: string | null;
        userId?: UserId.Raw | null;
        accountId?: AccountId.Raw | null;
    }
}
