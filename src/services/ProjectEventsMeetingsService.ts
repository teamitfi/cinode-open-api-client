/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectEventBaseModel } from '../models/ProjectEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectEventsMeetingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project events meetings list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */
    public projectEventMeetings(
        companyId: number,
        projectId: number,
    ): CancelablePromise<Array<ProjectEventBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/meetings',
            path: {
                'companyId': companyId,
                'projectId': projectId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
