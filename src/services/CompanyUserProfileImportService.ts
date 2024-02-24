/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportProfileAsyncOperation } from '../models/ImportProfileAsyncOperation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileImportService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create new profile import for a user.
     * This will start an async operation.
     * - If the operation is started successfully, the response will be `202 Accepted` and the `Location` header will contain the URL to get the status of the operation.
     * - If the operation is not started successfully, the response will be `400 Bad Request`
     * @param companyId
     * @param companyUserId
     * @param formData
     * @returns any Accepted
     * @throws ApiError
     */
    public createCompanyUserProfileImport(
        companyId: number,
        companyUserId: number,
        formData?: {
            File: Blob;
            MapSkillExperienceYearsToLevel?: boolean;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/import',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get current status of the async profile import operation.
     * This will return the status of an async operation.
     * - If the operation is still in progress, the response will be `202 Accepted`
     * - If the operation is completed successfully, the response will be `200 OK` and the `status` property will be `Completed`
     * - If the operation is completed with errors, the response will be `200 OK` and the `status` property will be `Failed`
     * @param companyId
     * @param companyUserId
     * @param operationId
     * @returns ImportProfileAsyncOperation Success
     * @returns any Accepted
     * @throws ApiError
     */
    public getCompanyUserProfileImport(
        companyId: number,
        companyUserId: number,
        operationId: number,
    ): CancelablePromise<ImportProfileAsyncOperation | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/import/{operationId}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'operationId': operationId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
}
