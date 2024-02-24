/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanySubcontractorGroupModel } from '../models/CompanySubcontractorGroupModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanySubcontractorGroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Subcontractor Groups by Company Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */
    public getCompanySubcontractorGroups(
        companyId: number,
    ): CancelablePromise<Array<CompanySubcontractorGroupModel>> {
        return this.httpRequest.request({
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
