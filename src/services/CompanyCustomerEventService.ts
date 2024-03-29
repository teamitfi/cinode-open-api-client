/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventModel } from '../models/CustomerEventModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerEventService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer event by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventModel All went well
     * @throws ApiError
     */
    public companyCustomerEvent(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<CustomerEventModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/{id}',
            path: {
                'companyId': companyId,
                'customerId': customerId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
