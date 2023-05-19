/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Sheets {
    interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }
}

export class Sheets {
    constructor(protected readonly options: Sheets.Options) {}

    /**
     * Returns sheets in a workbook
     */
    public async list(request: Flatfile.ListSheetsRequest): Promise<Flatfile.ListSheetsResponse> {
        const { workbookId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("workbookId", workbookId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                "/sheets"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ListSheetsResponse.parseOrThrow(_response.body, {
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

    /**
     * Returns a sheet in a workbook
     */
    public async get(sheetId: Flatfile.SheetId): Promise<Flatfile.SheetResponse> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.SheetResponse.parseOrThrow(_response.body, {
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

    /**
     * Deletes a specific sheet from a workbook
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     */
    public async delete(sheetId: Flatfile.SheetId): Promise<Flatfile.Success> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * Trigger data hooks and validation to run on a sheet
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     */
    public async validate(sheetId: Flatfile.SheetId): Promise<Flatfile.Success> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/validate`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * Returns records from a sheet in a workbook as a csv file
     */
    public async getRecordsAsCsv(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsCsvRequest = {}
    ): Promise<string> {
        const {
            versionId,
            sinceVersionId,
            sortField,
            sortDirection,
            filter,
            filterField,
            searchValue,
            searchField,
            ids,
        } = request;
        const _queryParams = new URLSearchParams();
        if (versionId != null) {
            _queryParams.append("versionId", versionId);
        }

        if (sinceVersionId != null) {
            _queryParams.append("sinceVersionId", sinceVersionId);
        }

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

        if (searchValue != null) {
            _queryParams.append("searchValue", searchValue);
        }

        if (searchField != null) {
            _queryParams.append("searchField", searchField);
        }

        if (ids != null) {
            if (Array.isArray(ids)) {
                for (const _item of ids) {
                    _queryParams.append("ids", _item);
                }
            } else {
                _queryParams.append("ids", ids);
            }
        }

        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/download`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.sheets.getRecordsAsCsv.Response.parseOrThrow(_response.body, {
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

    /**
     * Returns counts of records from a sheet
     */
    public async getRecordCounts(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordCountsRequest = {}
    ): Promise<Flatfile.RecordCountsResponse> {
        const { versionId, sinceVersionId, filter, filterField, searchValue, searchField, byField, q } = request;
        const _queryParams = new URLSearchParams();
        if (versionId != null) {
            _queryParams.append("versionId", versionId);
        }

        if (sinceVersionId != null) {
            _queryParams.append("sinceVersionId", sinceVersionId);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        if (searchValue != null) {
            _queryParams.append("searchValue", searchValue);
        }

        if (searchField != null) {
            _queryParams.append("searchField", searchField);
        }

        if (byField != null) {
            _queryParams.append("byField", byField.toString());
        }

        if (q != null) {
            _queryParams.append("q", q);
        }

        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/counts`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.RecordCountsResponse.parseOrThrow(_response.body, {
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
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
