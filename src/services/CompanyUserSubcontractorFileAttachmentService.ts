/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorFileAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get subcontractor File Attachment by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    public getSubcontractorAttachment(
        id: number,
        companyId: number,
        attachmentId: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{id}/attachments/{attachmentId}',
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
