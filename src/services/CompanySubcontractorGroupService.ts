/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanySubcontractorGroupModel } from '../models/CompanySubcontractorGroupModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanySubcontractorGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Subcontractor Group by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */
    public getCompanySubcontractorGroup(
        companyId: number,
        subcontractorGroupId: number,
    ): CancelablePromise<CompanySubcontractorGroupModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}',
            path: {
                'companyId': companyId,
                'subcontractorGroupId': subcontractorGroupId,
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
