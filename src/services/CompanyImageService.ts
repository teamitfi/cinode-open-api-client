/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyImageModel } from '../models/CompanyImageModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyImageService {
    /**
     * Get Company Image by Id
     * @param companyId Company Id
     * @param id Image id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    public static companyImage(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyImageModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/images/{id}',
            path: {
                'companyId': companyId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Download Company Image
     * @param companyId Company Id
     * @param id Image id
     * @param imageFileName Image File Name
     * @returns string All went well
     * @throws ApiError
     */
    public static companyImageDownload(
        companyId: number,
        id: number,
        imageFileName: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/images/{id}/{imageFileName}',
            path: {
                'companyId': companyId,
                'id': id,
                'imageFileName': imageFileName,
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
