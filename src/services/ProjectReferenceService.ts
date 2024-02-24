/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectReferenceModel } from '../models/ProjectReferenceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectReferenceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Project reference Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */
    public projectReference(
        companyId: number,
        projectId: number,
        id: number,
    ): CancelablePromise<ProjectReferenceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/references/{id}',
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
