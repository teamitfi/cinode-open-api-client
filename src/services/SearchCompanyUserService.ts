/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchCompanyUserQueryModel } from '../models/SearchCompanyUserQueryModel';
import type { SearchCompanyUserResultModel } from '../models/SearchCompanyUserResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchCompanyUserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company users list from search criteria
     * @param companyId Company Id
     * @param requestBody SearchCompanyUserQueryModel
     * @returns SearchCompanyUserResultModel All went well
     * @throws ApiError
     */
    public searchCompanyUser(
        companyId: number,
        requestBody?: SearchCompanyUserQueryModel,
    ): CancelablePromise<SearchCompanyUserResultModel> {
        return this.httpRequest.request({
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
