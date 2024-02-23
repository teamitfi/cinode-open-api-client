/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentSkillAddModel } from '../models/ProjectAssignmentSkillAddModel';
import type { ProjectAssignmentSkillEditModel } from '../models/ProjectAssignmentSkillEditModel';
import type { ProjectAssignmentSkillModel } from '../models/ProjectAssignmentSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectAssignmentSkillsService {
    /**
     * Add Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    public static addProjectAssignmentSkill(
        companyId: number,
        projectId: number,
        roleId: number,
        requestBody?: ProjectAssignmentSkillAddModel,
    ): CancelablePromise<ProjectAssignmentSkillModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills',
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
     * Update Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    public static updateProjectAssignmentSkill(
        companyId: number,
        projectId: number,
        roleId: number,
        id: number,
        requestBody?: ProjectAssignmentSkillEditModel,
    ): CancelablePromise<ProjectAssignmentSkillModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}',
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
     * Delete Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    public static deleteProjectAssignmentSkill(
        companyId: number,
        projectId: number,
        roleId: number,
        id: number,
    ): CancelablePromise<ProjectAssignmentSkillModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}',
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
