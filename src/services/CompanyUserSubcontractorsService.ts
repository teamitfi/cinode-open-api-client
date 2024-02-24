/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSubcontractorBaseModel } from '../models/CompanyUserSubcontractorBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get subcontractors list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanyUserSubcontractorBaseModel All went well
     * @throws ApiError
     */
    public companyUserSubcontractors(
        companyId: number,
    ): CancelablePromise<Array<CompanyUserSubcontractorBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
