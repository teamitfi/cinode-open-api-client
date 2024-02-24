/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerContactModel } from '../models/CompanyCustomerContactModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerContactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer contact list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    public contacts(
        companyId: number,
        customerId: number,
    ): CancelablePromise<Array<CompanyCustomerContactModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts',
            path: {
                'companyId': companyId,
                'customerId': customerId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
