/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfilePresentationEditModel } from '../models/CompanyUserProfilePresentationEditModel';
import type { CompanyUserProfilePresentationModel } from '../models/CompanyUserProfilePresentationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserProfilePresentationService {
    /**
     * Get profile presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */
    public static companyUserProfilePresentation(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<CompanyUserProfilePresentationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
     * Edit Profile Presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfilePresentationEditModel
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */
    public static updateCompanyUserProfilePresentation(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfilePresentationEditModel,
    ): CancelablePromise<CompanyUserProfilePresentationModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation',
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
