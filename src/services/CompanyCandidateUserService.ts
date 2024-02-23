/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateAddCandidateUserModel } from '../models/CompanyCandidateAddCandidateUserModel';
import type { CompanyUserCandidateModel } from '../models/CompanyUserCandidateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCandidateUserService {
    /**
     * Create an account for a candidate.
     * No email is sent to the candidate, you will have to communicate login details to the candidate yourself.
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Basic account information
     * @returns CompanyUserCandidateModel All went well
     * @throws ApiError
     */
    public static addCandidateUserFromCandidate(
        companyId: number,
        id: number,
        requestBody?: CompanyCandidateAddCandidateUserModel,
    ): CancelablePromise<CompanyUserCandidateModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{id}/user',
            path: {
                'companyId': companyId,
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
}
