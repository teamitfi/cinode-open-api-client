/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileBaseModel } from '../models/CompanyUserProfileBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfilesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profiles list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileBaseModel All went well
     * @throws ApiError
     */
    public companyUserProfiles(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserProfileBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profiles',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`,
            },
        });
    }
}
