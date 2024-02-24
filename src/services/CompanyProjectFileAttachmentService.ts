/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyProjectFileAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Project file attachment by Id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    public getProjectAttachment(
        id: number,
        companyId: number,
        attachmentId: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{id}/attachments/{attachmentId}',
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
