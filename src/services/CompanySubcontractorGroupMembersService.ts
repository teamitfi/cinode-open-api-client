/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCompanySubcontractorGroupMemberModel } from '../models/AddCompanySubcontractorGroupMemberModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanySubcontractorGroupMembersService {
    /**
     * Add subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param requestBody AddCompanySubcontractorGroupMemberModel
     * @returns void
     * @throws ApiError
     */
    public static addCompanySubcontractorGroupMember(
        companyId: number,
        subcontractorGroupId: number,
        requestBody?: AddCompanySubcontractorGroupMemberModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members',
            path: {
                'companyId': companyId,
                'subcontractorGroupId': subcontractorGroupId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Delete subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param id Subcontractor Id
     * @returns void
     * @throws ApiError
     */
    public static deleteCompanySubcontractorGroupMember(
        companyId: number,
        subcontractorGroupId: number,
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members/{id}',
            path: {
                'companyId': companyId,
                'subcontractorGroupId': subcontractorGroupId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
