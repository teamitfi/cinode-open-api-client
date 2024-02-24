/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateAddInviteModel } from '../models/CompanyCandidateAddInviteModel';
import type { CompanyCandidateAddModel } from '../models/CompanyCandidateAddModel';
import type { CompanyCandidateExtendedModel } from '../models/CompanyCandidateExtendedModel';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Candidate by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */
    public candidate(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyCandidateExtendedModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{id}',
            path: {
                'companyId': companyId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Patch company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyCandidatePatchDocument` for full type information per property
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */
    public patchCompanyCandidate(
        companyId: number,
        id: number,
        requestBody?: JsonPatchDocument,
    ): CancelablePromise<CompanyCandidateExtendedModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v0.1/companies/{companyId}/candidates/{id}',
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
    /**
     * Delete candidate from the system
     * This action is irreversible, use with caution
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCandidate(
        companyId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/candidates/{id}',
            path: {
                'companyId': companyId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Create Candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param requestBody CompanyCandidateAddModel
     * @returns any All went well
     * @returns CompanyCandidateExtendedModel Created
     * @throws ApiError
     */
    public addCompanyCandidate(
        companyId: number,
        requestBody?: CompanyCandidateAddModel,
    ): CancelablePromise<any | CompanyCandidateExtendedModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates',
            path: {
                'companyId': companyId,
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
    /**
     * Invite the CompanyCandidate to create their own Cinode account
     * A email is sent with your message and details for how to login
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Model with data about the candidate needed for the invitation
     * @returns any All went well
     * @throws ApiError
     */
    public inviteCandidate(
        companyId: number,
        id: number,
        requestBody?: CompanyCandidateAddInviteModel,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{id}/invite',
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
