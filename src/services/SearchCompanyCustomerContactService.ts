/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchCompanyCustomerContactQueryModel } from '../models/SearchCompanyCustomerContactQueryModel';
import type { SearchCompanyCustomerContactResultModel } from '../models/SearchCompanyCustomerContactResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchCompanyCustomerContactService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company customer contacts list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerContactResultModel All went well
     * @throws ApiError
     */
    public searchCompanyCustomerContact(
        companyId: number,
        requestBody?: SearchCompanyCustomerContactQueryModel,
    ): CancelablePromise<SearchCompanyCustomerContactResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/contacts/search',
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
