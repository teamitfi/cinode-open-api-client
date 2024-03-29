/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventMeetingAddEditModel } from '../models/CustomerEventMeetingAddEditModel';
import type { CustomerEventMeetingModel } from '../models/CustomerEventMeetingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerEventsMeetingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer event meeting by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    public companyCustomerEventMeeting(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<CustomerEventMeetingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}',
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
     * Update customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    public updateMeeting(
        companyId: number,
        customerId: number,
        id: string,
        requestBody?: CustomerEventMeetingAddEditModel,
    ): CancelablePromise<CustomerEventMeetingModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}',
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
     * Delete customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteMeeting(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}',
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
     * Add customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    public newMeeting(
        companyId: number,
        customerId: number,
        requestBody?: CustomerEventMeetingAddEditModel,
    ): CancelablePromise<CustomerEventMeetingModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/meetings',
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
