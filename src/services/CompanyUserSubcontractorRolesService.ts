/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSubcontractorRoleMemberModel } from '../models/CompanyUserSubcontractorRoleMemberModel';
import type { CompanyUserSubcontractorRolesModel } from '../models/CompanyUserSubcontractorRolesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorRolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get assigned and prospect roles for subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @returns CompanyUserSubcontractorRolesModel All went well
     * @throws ApiError
     */
    public getSubcontractorRoles(
        companyId: number,
        subcontractorId: number,
    ): CancelablePromise<CompanyUserSubcontractorRolesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/roles',
            path: {
                'companyId': companyId,
                'subcontractorId': subcontractorId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Get a specific role, assigned and or prospected, for subcontractor by role id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @param projectAssignmentId Project assignment Id
     * @returns CompanyUserSubcontractorRoleMemberModel All went well
     * @throws ApiError
     */
    public getSubcontractorRole(
        companyId: number,
        subcontractorId: number,
        projectAssignmentId: number,
    ): CancelablePromise<CompanyUserSubcontractorRoleMemberModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/roles/{projectAssignmentId}',
            path: {
                'companyId': companyId,
                'subcontractorId': subcontractorId,
                'projectAssignmentId': projectAssignmentId,
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
