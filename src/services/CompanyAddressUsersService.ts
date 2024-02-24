/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from '../models/CompanyUserExtendedModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyAddressUsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company users list for an address
     * @param companyId Company Id
     * @param id Address Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public companyAddressUsers(
        companyId: number,
        id: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/addresses/{id}/users',
            path: {
                'companyId': companyId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
