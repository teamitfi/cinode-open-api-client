/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanySubcontractorGroupModel } from '../models/CompanySubcontractorGroupModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanySubcontractorGroupsService {
    /**
     * Get Subcontractor Groups by Company Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */
    public static getCompanySubcontractorGroups(
        companyId: number,
    ): CancelablePromise<Array<CompanySubcontractorGroupModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/groups',
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
