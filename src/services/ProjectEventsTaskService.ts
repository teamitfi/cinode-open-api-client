/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectEventTaskAddEditModel } from '../models/ProjectEventTaskAddEditModel';
import type { ProjectEventTaskModel } from '../models/ProjectEventTaskModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectEventsTaskService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project event task by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    public projectEventTask(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<ProjectEventTaskModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}',
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
     * Update project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    public updateProjectTask(
        companyId: number,
        projectId: number,
        id: string,
        requestBody?: ProjectEventTaskAddEditModel,
    ): CancelablePromise<ProjectEventTaskModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}',
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
     * Delete project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteProjectTask(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}',
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
     * Add project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    public newProjectTask(
        companyId: number,
        projectId: number,
        requestBody?: ProjectEventTaskAddEditModel,
    ): CancelablePromise<ProjectEventTaskModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/tasks',
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
}
