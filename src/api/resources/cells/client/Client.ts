/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Cells {
    interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Cells {
    constructor(protected readonly _options: Cells.Options) {}

    /**
     * Returns record cell values grouped by all fields in the sheet
     */
    public async getValues(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetFieldValuesRequest,
        requestOptions?: Cells.RequestOptions
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
        const _queryParams: Record<string, string> = {};
        _queryParams["fieldKey"] = fieldKey;
        if (sortField != null) {
            _queryParams["sortField"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sortDirection"] = sortDirection;
        }

        if (filter != null) {
            _queryParams["filter"] = filter;
        }

        if (filterField != null) {
            _queryParams["filterField"] = filterField;
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["pageNumber"] = pageNumber.toString();
        }

        if (distinct != null) {
            _queryParams["distinct"] = distinct.toString();
        }

        if (includeCounts != null) {
            _queryParams["includeCounts"] = includeCounts.toString();
        }

        if (searchValue != null) {
            _queryParams["searchValue"] = searchValue;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/cells`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.5.34",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CellsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
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
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
