/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentAddModel } from '../models/ProjectAssignmentAddModel';
import type { ProjectAssignmentAnnouncementBaseModel } from '../models/ProjectAssignmentAnnouncementBaseModel';
import type { ProjectAssignmentAnnounceModel } from '../models/ProjectAssignmentAnnounceModel';
import type { ProjectAssignmentEditModel } from '../models/ProjectAssignmentEditModel';
import type { ProjectAssignmentModel } from '../models/ProjectAssignmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectAssignmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Get projectassignment by id (Obsolete)
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public oldProjectAssignment(
        companyId: number,
        projectId: number,
        id: number,
    ): CancelablePromise<ProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/projectassignments/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
    /**
     * Get Role by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public projectAssignment(
        companyId: number,
        projectId: number,
        id: number,
    ): CancelablePromise<ProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
    /**
     * Edit Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @param requestBody ProjectAssignmentEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public updateProjectAssignment(
        companyId: number,
        projectId: number,
        id: number,
        requestBody?: ProjectAssignmentEditModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
     * Delete Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public deleteProjectAssignment(
        companyId: number,
        projectId: number,
        id: number,
    ): CancelablePromise<ProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Add Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectAssignmentAddEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    public newProjectAssignment(
        companyId: number,
        projectId: number,
        requestBody?: ProjectAssignmentAddModel,
    ): CancelablePromise<ProjectAssignmentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
     * Announce a role (ProjectAssignment) to the Partner Network and optionally also to Cinode Market(https://cinode.market/requests).
     * If you are testing, set the "PublishForReal" to "false", otherwise you will publish this announcement for real. When you're testing ("PublishForReal = false) RequestId will be 0 in the response.
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param projectId Project Id
     * @param projectAssignmentId ProjectAssignment Id
     * @param companyId
     * @param requestBody ProjectAssignmentAnnounceModel
     * @returns ProjectAssignmentAnnouncementBaseModel Success
     * @returns any All went well
     * @throws ApiError
     */
    public announceProjectAssignment(
        projectId: number,
        projectAssignmentId: number,
        companyId: string,
        requestBody?: ProjectAssignmentAnnounceModel,
    ): CancelablePromise<ProjectAssignmentAnnouncementBaseModel | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/roles/{projectAssignmentId}/announce',
            path: {
                'projectId': projectId,
                'projectAssignmentId': projectAssignmentId,
                'companyId': companyId,
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
