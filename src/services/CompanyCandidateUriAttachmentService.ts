/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateUriAttachmentAddModel } from '../models/CompanyCandidateUriAttachmentAddModel';
import type { CompanyCandidateUriAttachmentModel } from '../models/CompanyCandidateUriAttachmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateUriAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param requestBody
     * @returns CompanyCandidateUriAttachmentModel Created
     * @throws ApiError
     */
    public candidateUriAttachment(
        id: number,
        companyId: number,
        requestBody?: CompanyCandidateUriAttachmentAddModel,
    ): CancelablePromise<CompanyCandidateUriAttachmentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{id}/uriattachments',
            path: {
                'id': id,
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Delete Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param attachmentId
     * @returns any Success
     * @throws ApiError
     */
    public deleteCandidateUriAttachment(
        id: number,
        companyId: number,
        attachmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}',
            path: {
                'id': id,
                'companyId': companyId,
                'attachmentId': attachmentId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }
}
