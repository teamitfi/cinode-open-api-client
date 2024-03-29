/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectReferenceModel } from '../models/ProjectReferenceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectReferencesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */
    public projectReferences(
        companyId: number,
        projectId: number,
    ): CancelablePromise<Array<ProjectReferenceModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/references',
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
