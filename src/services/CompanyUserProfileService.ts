/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileAddEditModel } from '../models/CompanyUserProfileAddEditModel';
import type { CompanyUserProfileBaseModel } from '../models/CompanyUserProfileBaseModel';
import type { CompanyUserProfileFullModel } from '../models/CompanyUserProfileFullModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile by company user id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileFullModel All went well
     * @throws ApiError
     */
    public companyUserProfile(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<CompanyUserProfileFullModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile',
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
     * Create Profile for user
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileBaseModel Created
     * @throws ApiError
     */
    public newCompanyUserProfile(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileBaseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile',
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
