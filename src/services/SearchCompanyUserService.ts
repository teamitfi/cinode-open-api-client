/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchCompanyUserQueryModel } from '../models/SearchCompanyUserQueryModel';
import type { SearchCompanyUserResultModel } from '../models/SearchCompanyUserResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchCompanyUserService {
    /**
     * Get company users list from search criteria
     * @param companyId Company Id
     * @param requestBody SearchCompanyUserQueryModel
     * @returns SearchCompanyUserResultModel All went well
     * @throws ApiError
     */
    public static searchCompanyUser(
        companyId: number,
        requestBody?: SearchCompanyUserQueryModel,
    ): CancelablePromise<SearchCompanyUserResultModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/search',
            path: {
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
