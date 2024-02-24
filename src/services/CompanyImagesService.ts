/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyImageModel } from '../models/CompanyImageModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyImagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Company Images Assigned to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    public companyImages(
        companyId: number,
        id: number,
    ): CancelablePromise<Array<CompanyImageModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{id}/images',
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
     * Add Image to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param formData
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    public addCompanyImage(
        companyId: number,
        id: number,
        formData?: {
            File: Blob;
            SetAsPrimary?: boolean;
        },
    ): CancelablePromise<CompanyImageModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{id}/images',
            path: {
                'companyId': companyId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
