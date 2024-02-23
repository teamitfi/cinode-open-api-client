/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventNoteAddEditModel } from '../models/CustomerEventNoteAddEditModel';
import type { CustomerEventNoteModel } from '../models/CustomerEventNoteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCustomerEventsNoteService {
    /**
     * Get customer event note by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    public static companyCustomerEventNote(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<CustomerEventNoteModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}',
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
     * Update customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    public static updateNote(
        companyId: number,
        customerId: number,
        id: string,
        requestBody?: CustomerEventNoteAddEditModel,
    ): CancelablePromise<CustomerEventNoteModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}',
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
     * Delete customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteNote(
        companyId: number,
        customerId: number,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}',
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
     * Add customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventNoteAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    public static newNote(
        companyId: number,
        customerId: number,
        requestBody?: CustomerEventNoteAddEditModel,
    ): CancelablePromise<CustomerEventNoteModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/events/notes',
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
