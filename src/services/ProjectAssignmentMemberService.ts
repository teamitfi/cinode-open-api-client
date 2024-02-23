/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentMemberEmployeeAddModel } from '../models/ProjectAssignmentMemberEmployeeAddModel';
import type { ProjectAssignmentMemberEmployeeEditModel } from '../models/ProjectAssignmentMemberEmployeeEditModel';
import type { ProjectAssignmentMemberSubcontractorAddModel } from '../models/ProjectAssignmentMemberSubcontractorAddModel';
import type { ProjectAssignmentMemberSubcontractorEditModel } from '../models/ProjectAssignmentMemberSubcontractorEditModel';
import type { ProjectAssignmentModel } from '../models/ProjectAssignmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectAssignmentMemberService {
    /**
     * Add Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberEmployeeAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public static addProjectAssignmentMemberEmployee(
        companyId: number,
        projectId: number,
        roleId: number,
        requestBody?: ProjectAssignmentMemberEmployeeAddModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'roleId': roleId,
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
     * Add Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public static addProjectAssignmentMemberSubcontractor(
        companyId: number,
        projectId: number,
        roleId: number,
        requestBody?: ProjectAssignmentMemberSubcontractorAddModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'roleId': roleId,
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
     * Edit Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public static updateProjectAssignmentMemberEmployee(
        companyId: number,
        projectId: number,
        roleId: number,
        id: number,
        requestBody?: ProjectAssignmentMemberEmployeeEditModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'roleId': roleId,
                'id': id,
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
     * Edit Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public static updateProjectAssignmentMemberSubcontractor(
        companyId: number,
        projectId: number,
        roleId: number,
        id: number,
        requestBody?: ProjectAssignmentMemberSubcontractorEditModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'roleId': roleId,
                'id': id,
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
     * Delete Role Member
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public static deleteProjectAssignmentMemberEmployee(
        companyId: number,
        projectId: number,
        roleId: number,
        id: number,
    ): CancelablePromise<ProjectAssignmentModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'roleId': roleId,
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
