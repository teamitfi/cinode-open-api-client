/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidatePipelineModel } from '../models/CompanyCandidatePipelineModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCandidatePipelinesService {
    /**
     * Get candidate pipelines
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyCandidatePipelineModel All went well
     * @throws ApiError
     */
    public static candidatePipelines(
        companyId: number,
    ): CancelablePromise<Array<CompanyCandidatePipelineModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/pipelines',
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