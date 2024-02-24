/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerContactAddEditModel } from '../models/CompanyCustomerContactAddEditModel';
import type { CompanyCustomerContactModel } from '../models/CompanyCustomerContactModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerContactService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get customer contact by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    public contact(
        companyId: number,
        customerId: number,
        id: number,
    ): CancelablePromise<CompanyCustomerContactModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}',
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
     * Update customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    public editCompanyCustomerContact(
        companyId: number,
        customerId: number,
        id: number,
        requestBody?: CompanyCustomerContactAddEditModel,
    ): CancelablePromise<CompanyCustomerContactModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}',
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
     * Delete customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCustomerContact(
        companyId: number,
        customerId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}',
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
     * Add customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    public newCompanyCustomerContact(
        companyId: number,
        customerId: number,
        requestBody?: CompanyCustomerContactAddEditModel,
    ): CancelablePromise<CompanyCustomerContactModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts',
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
