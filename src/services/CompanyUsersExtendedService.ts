/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from '../models/CompanyUserExtendedModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUsersExtendedService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get extended company users list
     * @param companyId Company Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public companyUsersExtended(
        companyId: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/extended',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
