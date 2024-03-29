/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectEventModel } from '../models/ProjectEventModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectEventService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project event by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventModel All went well
     * @throws ApiError
     */
    public projectEvent(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<ProjectEventModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/{id}',
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
}
