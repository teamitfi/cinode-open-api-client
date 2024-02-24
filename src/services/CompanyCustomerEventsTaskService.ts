/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventTaskAddEditModel } from '../models/CustomerEventTaskAddEditModel';
import type { CustomerEventTaskModel } from '../models/CustomerEventTaskModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerEventsTaskService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer event task by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    public companyCustomerEventTask(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<CustomerEventTaskModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}',
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
    /**
     * Update customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    public updateTask(
        companyId: number,
        customerId: number,
        id: string,
        requestBody?: CustomerEventTaskAddEditModel,
    ): CancelablePromise<CustomerEventTaskModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}',
            path: {
                'companyId': companyId,
                'customerId': customerId,
                'id': id,
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
    /**
     * Delete customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteTask(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}',
            path: {
                'companyId': companyId,
                'customerId': customerId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Add customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    public newTask(
        companyId: number,
        customerId: number,
        requestBody?: CustomerEventTaskAddEditModel,
    ): CancelablePromise<CustomerEventTaskModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/tasks',
            path: {
                'companyId': companyId,
                'customerId': customerId,
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
