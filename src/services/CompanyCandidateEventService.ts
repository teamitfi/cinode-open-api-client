/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventModel } from '../models/CompanyCandidateEventModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateEventService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates event by id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventModel All went well
     * @throws ApiError
     */
    public companyCandidateEvent(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<CompanyCandidateEventModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/{id}',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
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
