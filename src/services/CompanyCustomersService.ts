/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerBaseModel } from '../models/CompanyCustomerBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerBaseModel All went well
     * @throws ApiError
     */
    public companyCustomers(
        companyId: number,
    ): CancelablePromise<Array<CompanyCustomerBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers',
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
