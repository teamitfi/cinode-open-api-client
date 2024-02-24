/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagBaseModel } from '../models/CompanyTagBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyTagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company tags
     * Sample request:
     *
     * GET /v0.1/companies/1/tags
     * @param companyId Company Id
     * @returns CompanyTagBaseModel All went well
     * @throws ApiError
     */
    public companyTags(
        companyId: number,
    ): CancelablePromise<Array<CompanyTagBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/tags',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
