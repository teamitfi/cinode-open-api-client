/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateAddInviteModel } from '../models/CompanyCandidateAddInviteModel';
import type { CompanyCandidateAddModel } from '../models/CompanyCandidateAddModel';
import type { CompanyCandidateExtendedModel } from '../models/CompanyCandidateExtendedModel';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCandidateService {
    /**
     * Get Candidate by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */
    public static candidate(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyCandidateExtendedModel> {
        return __request(OpenAPI, {
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
    public static patchCompanyCandidate(
        companyId: number,
        id: number,
        requestBody?: JsonPatchDocument,
    ): CancelablePromise<CompanyCandidateExtendedModel> {
        return __request(OpenAPI, {
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
    public static deleteCompanyCandidate(
        companyId: number,
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static addCompanyCandidate(
        companyId: number,
        requestBody?: CompanyCandidateAddModel,
    ): CancelablePromise<any | CompanyCandidateExtendedModel> {
        return __request(OpenAPI, {
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
    public static inviteCandidate(
        companyId: number,
        id: number,
        requestBody?: CompanyCandidateAddInviteModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
