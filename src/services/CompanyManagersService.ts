/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from '../models/CompanyUserBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyManagersService {
    /**
     * Get company managers
     * Sample request:
     *
     * GET /v0.1/companies/1/managers
     * @param companyId Company Id
     * @returns CompanyUserBaseModel All went well
     * @throws ApiError
     */
    public static companyManagers(
        companyId: number,
    ): CancelablePromise<Array<CompanyUserBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/managers',
            path: {
                'companyId': companyId,
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
}
