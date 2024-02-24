/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from '../models/CompanyUserBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyManagersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company managers
     * Sample request:
     *
     * GET /v0.1/companies/1/managers
     * @param companyId Company Id
     * @returns CompanyUserBaseModel All went well
     * @throws ApiError
     */
    public companyManagers(
        companyId: number,
    ): CancelablePromise<Array<CompanyUserBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/managers',
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
