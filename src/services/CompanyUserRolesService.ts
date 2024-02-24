/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProjectAssignmentModel } from '../models/CompanyUserProjectAssignmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserRolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Roles for CompanyUser by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserProjectAssignmentModel All went well
     * @throws ApiError
     */
    public companyUserRoles(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyUserProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{id}/roles',
            path: {
                'companyId': companyId,
                'id': id,
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
