/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerManagerModel } from '../models/CompanyCustomerManagerModel';
import type { CompanyCustomerManagersAddEditModel } from '../models/CompanyCustomerManagersAddEditModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCustomerManagersService {
    /**
     * Get customer managers
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerManagerModel All went well
     * @throws ApiError
     */
    public static companyCustomerManagers(
        companyId: number,
        customerId: number,
    ): CancelablePromise<Array<CompanyCustomerManagerModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/customers/{customerId}/managers',
            path: {
                'companyId': companyId,
                'customerId': customerId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Add customer responsible
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/22228/managers
     * {
         * [
             * 51096
             * ]
             * }
             * @param companyId Company Id
             * @param customerId Customer Id
             * @param requestBody CompanyCustomerManagersAddEditModel
             * @returns CompanyCustomerManagerModel All went well
             * @throws ApiError
             */
            public static addCompanyCustomerResponsible(
                companyId: number,
                customerId: number,
                requestBody?: CompanyCustomerManagersAddEditModel,
            ): CancelablePromise<Array<CompanyCustomerManagerModel>> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v0.1/companies/{companyId}/customers/{customerId}/managers',
                    path: {
                        'companyId': companyId,
                        'customerId': customerId,
                    },
                    body: requestBody,
                    mediaType: 'application/json-patch+json',
                    errors: {
                        400: `Incorrect request`,
                        401: `Unauthorized request`,
                        403: `Forbidden`,
                        404: `Not Found`,
                        500: `Server error`,
                    },
                });
            }
            /**
             * Remove customer responsible
             * Sample request:
             *
             * DELETE /v0.1/companies/1/customers/22228/managers/54632
             * @param companyId Company Id
             * @param customerId Customer Id
             * @param id User Id
             * @returns any All went well
             * @throws ApiError
             */
            public static removeCustomerManager(
                companyId: number,
                customerId: number,
                id: number,
            ): CancelablePromise<any> {
                return __request(OpenAPI, {
                    method: 'DELETE',
                    url: '/v0.1/companies/{companyId}/customers/{customerId}/managers/{id}',
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
        }
