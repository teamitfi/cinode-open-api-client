/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileReferenceAddEditModel } from '../models/CompanyUserProfileReferenceAddEditModel';
import type { CompanyUserProfileReferenceModel } from '../models/CompanyUserProfileReferenceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserProfileReferenceService {
    /**
     * Get profile reference by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileReference Id
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */
    public static companyUserProfileReference(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileReferenceModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}',
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
     * Update Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */
    public static updateCompanyUserProfileReference(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileReferenceAddEditModel,
    ): CancelablePromise<CompanyUserProfileReferenceModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}',
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
     * Delete Profile Reference Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyUserProfileReference(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}',
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
     * Create Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileReferenceModel Created
     * @throws ApiError
     */
    public static newCompanyUserProfileReference(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileReferenceAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileReferenceModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/references',
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
