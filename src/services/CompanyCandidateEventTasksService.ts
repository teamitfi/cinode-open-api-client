/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventBaseModel } from '../models/CompanyCandidateEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCandidateEventTasksService {
    /**
     * Get company candidates events tasks list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    public static companyCandidateTaskEventList(
        companyId: number,
        candidateId: number,
    ): CancelablePromise<Array<CompanyCandidateEventBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
