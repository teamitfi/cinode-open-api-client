/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectEventMeetingAddEditModel } from '../models/ProjectEventMeetingAddEditModel';
import type { ProjectEventMeetingModel } from '../models/ProjectEventMeetingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectEventsMeetingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project event meeting by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    public projectEventMeeting(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<ProjectEventMeetingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}',
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
     * Update project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    public updateProjectMeeting(
        companyId: number,
        projectId: number,
        id: string,
        requestBody?: ProjectEventMeetingAddEditModel,
    ): CancelablePromise<ProjectEventMeetingModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}',
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
     * Delete project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteProjectMeeting(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}',
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
     * Add project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    public newProjectMeeting(
        companyId: number,
        projectId: number,
        requestBody?: ProjectEventMeetingAddEditModel,
    ): CancelablePromise<ProjectEventMeetingModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/meetings',
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
