/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagModel } from '../models/CompanyTagModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyTagService {
    /**
     * Get company tag by Id
     * Sample request:
     *
     * GET /v0.1/companies/1/tags/1
     * @param companyId Company Id
     * @param id Tag Id
     * @returns CompanyTagModel Success
     * @returns any All went well
     * @throws ApiError
     */
    public static companyTag(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyTagModel | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/tags/{id}',
            path: {
                'companyId': companyId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
    }
}
