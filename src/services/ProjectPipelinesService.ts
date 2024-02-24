/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectPipelineModel } from '../models/ProjectPipelineModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectPipelinesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project pipelines
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @returns ProjectPipelineModel All went well
     * @throws ApiError
     */
    public projectPipelines(
        companyId: number,
    ): CancelablePromise<Array<ProjectPipelineModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/pipelines',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
