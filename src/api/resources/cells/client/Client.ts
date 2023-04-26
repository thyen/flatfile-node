/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api";
import URLSearchParams from "@ungap/url-search-params";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Cells {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Cells {
    constructor(protected readonly options: Cells.Options) {}

    /**
     * Returns record cell values grouped by all fields in the sheet
     */
    public async getValues(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetFieldValuesRequest
    ): Promise<Flatfile.CellsResponse> {
        const {
            fieldKey,
            sortField,
            sortDirection,
            filter,
            filterField,
            pageSize,
            pageNumber,
            distinct,
            includeCounts,
            searchValue,
        } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("fieldKey", fieldKey);
        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (distinct != null) {
            _queryParams.append("distinct", distinct.toString());
        }

        if (includeCounts != null) {
            _queryParams.append("includeCounts", includeCounts.toString());
        }

        if (searchValue != null) {
            _queryParams.append("searchValue", searchValue);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/cells`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.CellsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
