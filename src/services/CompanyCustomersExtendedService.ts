/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerExtendedModel } from '../models/CompanyCustomerExtendedModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomersExtendedService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get extended company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerExtendedModel All went well
     * @throws ApiError
     */
    public customersExtended(
        companyId: number,
    ): CancelablePromise<Array<CompanyCustomerExtendedModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/extended',
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
