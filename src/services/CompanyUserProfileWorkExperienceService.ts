/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileWorkExperienceAddEditModel } from '../models/CompanyUserProfileWorkExperienceAddEditModel';
import type { CompanyUserProfileWorkExperienceModel } from '../models/CompanyUserProfileWorkExperienceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserProfileWorkExperienceService {
    /**
     * Get profile work experience by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileWorkExperience Id
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */
    public static companyUserProfileWorkExperience(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileWorkExperienceModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}',
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
     * Update Profile Work Experience
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileWorkExperienceAddEditModel
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */
    public static updateCompanyUserProfileWorkExperience(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileWorkExperienceAddEditModel,
    ): CancelablePromise<CompanyUserProfileWorkExperienceModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}',
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
     * Delete Profile Work Experience Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyUserProfileWorkExperience(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}',
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
     * Create WorkExperience Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserWorkExperienceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileWorkExperienceModel Created
     * @throws ApiError
     */
    public static newCompanyUserProfileWorkExperience(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileWorkExperienceAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileWorkExperienceModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences',
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
