/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfilePresentationEditModel } from '../models/CompanyUserProfilePresentationEditModel';
import type { CompanyUserProfilePresentationModel } from '../models/CompanyUserProfilePresentationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfilePresentationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */
    public companyUserProfilePresentation(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<CompanyUserProfilePresentationModel> {
        return this.httpRequest.request({
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
    public updateCompanyUserProfilePresentation(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfilePresentationEditModel,
    ): CancelablePromise<CompanyUserProfilePresentationModel> {
        return this.httpRequest.request({
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
