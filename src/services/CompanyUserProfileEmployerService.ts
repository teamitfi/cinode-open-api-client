/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileEmployerAddEditModel } from '../models/CompanyUserProfileEmployerAddEditModel';
import type { CompanyUserProfileEmployerModel } from '../models/CompanyUserProfileEmployerModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserProfileEmployerService {
    /**
     * Get profile employer by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEmployer Id
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */
    public static companyUserProfileEmployer(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileEmployerModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}',
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
     * Update Profile Employer
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */
    public static updateCompanyUserProfileEmployer(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileEmployerAddEditModel,
    ): CancelablePromise<CompanyUserProfileEmployerModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}',
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
     * Delete Profile Employer
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyUserProfileEmployer(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}',
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
     * Create Employer profile item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEmployerModel Created
     * @throws ApiError
     */
    public static newCompanyUserProfileEmployer(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileEmployerAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileEmployerModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers',
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
