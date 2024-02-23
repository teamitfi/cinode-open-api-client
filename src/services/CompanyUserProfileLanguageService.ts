/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileLanguageAddModel } from '../models/CompanyUserProfileLanguageAddModel';
import type { CompanyUserProfileLanguageEditModel } from '../models/CompanyUserProfileLanguageEditModel';
import type { CompanyUserProfileLanguageModel } from '../models/CompanyUserProfileLanguageModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserProfileLanguageService {
    /**
     * Get profile language by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileLanguage Id
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */
    public static companyUserProfileLanguage(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileLanguageModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Update Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */
    public static updateCompanyUserProfileLanguage(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileLanguageEditModel,
    ): CancelablePromise<CompanyUserProfileLanguageModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Delete Language Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyUserProfileLanguage(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}',
            path: {
                'id': id,
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Create Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileLanguageAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileLanguageModel Created
     * @throws ApiError
     */
    public static newCompanyUserProfileLanguage(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileLanguageAddModel,
    ): CancelablePromise<any | CompanyUserProfileLanguageModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
