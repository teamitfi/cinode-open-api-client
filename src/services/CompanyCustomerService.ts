/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerAddModel } from '../models/CompanyCustomerAddModel';
import type { CompanyCustomerDeleteModel } from '../models/CompanyCustomerDeleteModel';
import type { CompanyCustomerEditModel } from '../models/CompanyCustomerEditModel';
import type { CompanyCustomerModel } from '../models/CompanyCustomerModel';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCustomerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company customer by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId
     * @param id
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    public getCompanyCustomer(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyCustomerModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{id}',
            path: {
                'companyId': companyId,
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
     * Update company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id
     * @param companyId
     * @param requestBody CompanyCustomerAddEditModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    public updateCompanyCustomer(
        id: number,
        companyId: number,
        requestBody?: CompanyCustomerEditModel,
    ): CancelablePromise<CompanyCustomerModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/customers/{id}',
            path: {
                'id': id,
                'companyId': companyId,
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
     * Patch company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody Patch of CompanyCustomerPatchModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    public patchCompanyCustomer(
        id: number,
        companyId: number,
        requestBody?: JsonPatchDocument,
    ): CancelablePromise<CompanyCustomerModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v0.1/companies/{companyId}/customers/{id}',
            path: {
                'id': id,
                'companyId': companyId,
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
     * Delete customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody CompanyCustomerDeleteModel
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCustomer(
        id: number,
        companyId: number,
        requestBody?: CompanyCustomerDeleteModel,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/customers/{id}',
            path: {
                'id': id,
                'companyId': companyId,
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
     * Add company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody CompanyCustomerAddModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    public newCompanyCustomer(
        companyId: number,
        requestBody?: CompanyCustomerAddModel,
    ): CancelablePromise<CompanyCustomerModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/customers',
            path: {
                'companyId': companyId,
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
