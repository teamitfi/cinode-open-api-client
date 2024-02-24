/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserPermissionsEditModel } from '../models/CompanyUserPermissionsEditModel';
import type { RoleModel } from '../models/RoleModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserPermissionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update Permissions for Company User
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserPermissionsEditModel
     * @returns RoleModel All went well
     * @throws ApiError
     */
    public updatePermissions(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserPermissionsEditModel,
    ): CancelablePromise<Array<RoleModel>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/permissions',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
}
