/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from '../models/CompanyUserExtendedModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyAddressUsersService {
    /**
     * Get company users list for an address
     * @param companyId Company Id
     * @param id Address Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public static companyAddressUsers(
        companyId: number,
        id: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return __request(OpenAPI, {
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
