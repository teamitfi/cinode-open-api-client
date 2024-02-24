/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventBaseModel } from '../models/CustomerEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerEventsTasksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer event tasks list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */
    public companyCustomerEventTasks(
        companyId: number,
        customerId: number,
    ): CancelablePromise<Array<CustomerEventBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/tasks',
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
