/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagModel } from '../models/CompanyTagModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyCustomerContactTagsService {
    /**
     * Edit Tags for CustomerContact
     * Note:
     *
     * Posted tags will replace any existing tags for the contact.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/contacts/5360/tags
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
                 * @param contactId CustomerContact Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyTagModel All went well
                 * @throws ApiError
                 */
                public static editCustomerContactTags(
                    companyId: number,
                    customerId: number,
                    contactId: number,
                    requestBody?: Array<CompanyTagModel>,
                ): CancelablePromise<Array<CompanyTagModel>> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/v0.1/companies/{companyId}/customers/{customerId}/contacts/{contactId}/tags',
                        path: {
                            'companyId': companyId,
                            'customerId': customerId,
                            'contactId': contactId,
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
