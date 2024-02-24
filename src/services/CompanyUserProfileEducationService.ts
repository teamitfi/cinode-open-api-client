/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileEducationAddEditModel } from '../models/CompanyUserProfileEducationAddEditModel';
import type { CompanyUserProfileEducationModel } from '../models/CompanyUserProfileEducationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileEducationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile education by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEducation Id
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */
    public companyUserProfileEducation(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileEducationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}',
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
     * Update Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */
    public updateCompanyUserProfileEducation(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileEducationAddEditModel,
    ): CancelablePromise<CompanyUserProfileEducationModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}',
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
     * Delete Profile Education
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserProfileEducation(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}',
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
     * Create Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEducationModel Created
     * @throws ApiError
     */
    public newCompanyUserProfileEducation(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileEducationAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileEducationModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations',
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
