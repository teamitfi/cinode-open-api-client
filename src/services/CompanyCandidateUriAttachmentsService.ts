/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateUriAttachmentModel } from '../models/CompanyCandidateUriAttachmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateUriAttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Candidate Uri Attachment by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns CompanyCandidateUriAttachmentModel All went well
     * @throws ApiError
     */
    public getCandidateUriAttachment(
        id: number,
        companyId: number,
        attachmentId: string,
    ): CancelablePromise<CompanyCandidateUriAttachmentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}',
            path: {
                'id': id,
                'companyId': companyId,
                'attachmentId': attachmentId,
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
