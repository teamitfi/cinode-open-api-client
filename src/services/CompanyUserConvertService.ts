/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConvertCompanyUserToAadAccountModel } from '../models/ConvertCompanyUserToAadAccountModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserConvertService {
    /**
     * Convert company user employee to an AAD account
     * Requires access level: CompanyAdmin.
     * @param companyUserId Company User Id
     * @param companyId
     * @param requestBody ConvertCompanyUserToAadAccountModel
     * @returns any All went well
     * @throws ApiError
     */
    public static convertUserToAadAccount(
        companyUserId: number,
        companyId: string,
        requestBody?: ConvertCompanyUserToAadAccountModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/convert-aad',
            path: {
                'companyUserId': companyUserId,
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
}
