/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventBaseModel } from '../models/CompanyCandidateEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateEventNotesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates events notes list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    public companyCandidateNoteEventList(
        companyId: number,
        candidateId: number,
    ): CancelablePromise<Array<CompanyCandidateEventBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes',
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
