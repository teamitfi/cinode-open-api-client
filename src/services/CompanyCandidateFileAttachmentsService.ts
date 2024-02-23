/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateFileAttachmentListModel } from '../models/CompanyCandidateFileAttachmentListModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCandidateFileAttachmentsService {
    /**
     * Upload Candidate File Attachment
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyCandidateFileAttachmentListModel Created
     * @throws ApiError
     */
    public static candidateAttachment(
        id: number,
        companyId: number,
        formData?: {
            Files: Array<Blob>;
            Title: string;
            Description?: string;
        },
    ): CancelablePromise<CompanyCandidateFileAttachmentListModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{id}/attachments',
            path: {
                'id': id,
                'companyId': companyId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }
}
