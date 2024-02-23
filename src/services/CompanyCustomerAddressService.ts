/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerAddressAddEditModel } from '../models/CompanyCustomerAddressAddEditModel';
import type { CompanyCustomerAddressModel } from '../models/CompanyCustomerAddressModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCustomerAddressService {
    /**
     * Get customer address by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    public static customerAddress(
        companyId: number,
        customerId: number,
        id: number,
    ): CancelablePromise<CompanyCustomerAddressModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}',
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
     * Update customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Customer Address Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    public static editCompanyCustomerAddress(
        companyId: number,
        customerId: number,
        id: number,
        requestBody?: CompanyCustomerAddressAddEditModel,
    ): CancelablePromise<CompanyCustomerAddressModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}',
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
     * Delete customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyCustomerAddress(
        companyId: number,
        customerId: number,
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}',
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
     * Add customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    public static newCompanyCustomerAddress(
        companyId: number,
        customerId: number,
        requestBody?: CompanyCustomerAddressAddEditModel,
    ): CancelablePromise<CompanyCustomerAddressModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/addresses',
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
