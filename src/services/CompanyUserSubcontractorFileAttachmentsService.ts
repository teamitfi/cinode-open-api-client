/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSubcontractorFileAttachmentListModel } from '../models/CompanyUserSubcontractorFileAttachmentListModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserSubcontractorFileAttachmentsService {
    /**
     * Upload subcontractor file attachment
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyUserSubcontractorFileAttachmentListModel Created
     * @throws ApiError
     */
    public static subcontractorAttachment(
        id: number,
        companyId: number,
        formData?: {
            Files: Array<Blob>;
            Title: string;
            Description?: string;
        },
    ): CancelablePromise<CompanyUserSubcontractorFileAttachmentListModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/subcontractors/{id}/attachments',
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
