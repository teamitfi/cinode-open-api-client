/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventBaseModel } from '../models/CompanyUserEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorEventsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get subcontractors events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    public companyUserSubcontractorEvents(
        companyId: number,
        subcontractorId: number,
    ): CancelablePromise<Array<CompanyUserEventBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/events',
            path: {
                'companyId': companyId,
                'subcontractorId': subcontractorId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
