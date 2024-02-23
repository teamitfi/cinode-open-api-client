/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchCompanyCustomerQueryModel } from '../models/SearchCompanyCustomerQueryModel';
import type { SearchCompanyCustomerResultModel } from '../models/SearchCompanyCustomerResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchCompanyCustomersService {
    /**
     * Get company customers list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerResultModel All went well
     * @throws ApiError
     */
    public static searchCompanyCustomer(
        companyId: number,
        requestBody?: SearchCompanyCustomerQueryModel,
    ): CancelablePromise<SearchCompanyCustomerResultModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/search',
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
