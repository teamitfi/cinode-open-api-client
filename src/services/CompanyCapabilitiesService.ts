/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCapabilitiesModel } from '../models/CompanyCapabilitiesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCapabilitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company capabilities
     * @param companyId CompanyId
     * @returns CompanyCapabilitiesModel All went well
     * @throws ApiError
     */
    public companyCapabilities(
        companyId: number,
    ): CancelablePromise<CompanyCapabilitiesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/capabilities',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
