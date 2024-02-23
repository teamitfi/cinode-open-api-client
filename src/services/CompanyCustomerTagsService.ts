/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerModel } from '../models/CompanyCustomerModel';
import type { CompanyTagModel } from '../models/CompanyTagModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCustomerTagsService {
    /**
     * Edit Tags for Customer
     * Note:
     *
     * Posted tags will replace any existing tags for the customer.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param customerId Customer Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyCustomerModel All went well
                 * @throws ApiError
                 */
                public static editCustomerTags(
                    companyId: number,
                    customerId: number,
                    requestBody?: Array<CompanyTagModel>,
                ): CancelablePromise<CompanyCustomerModel> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/v0.1/companies/{companyId}/customers/{customerId}/tags',
                        path: {
                            'companyId': companyId,
                            'customerId': customerId,
                        },
                        body: requestBody,
                        mediaType: 'application/json-patch+json',
                        errors: {
                            400: `Incorrect request`,
                            401: `Unauthorized request`,
                            403: `Forbidden request`,
                            404: `Resource not found`,
                            500: `Server error`,
                        },
                    });
                }
            }
