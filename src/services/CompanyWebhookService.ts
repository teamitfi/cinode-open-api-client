/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookAddModel } from '../models/WebhookAddModel';
import type { WebhookModel } from '../models/WebhookModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyWebhookService {
    /**
     * Add Webhook
     * Sample request:
     *
     * POST /v0.1/companies/1/webhooks
     * {
         * "isActive": false,
         * "endpointUrl": "https://webhook.site/7a619ffb-e67c-41fc-8113-083d6013f76c",
         * "configurations": [
             * {
                 * "entityType": 1,
                 * "actionType": 1
                 * }
                 * ],
                 * "credentials": [
                     * {
                         * "isBasicAuthentication": true,
                         * "headerName": "user",
                         * "headerValue": "somevalue"
                         * }
                         * ]
                         * }
                         * @param companyId Company Id
                         * @param requestBody WebhookAddModel
                         * @returns WebhookModel All went well
                         * @throws ApiError
                         */
                        public static newWebhook(
                            companyId: number,
                            requestBody?: WebhookAddModel,
                        ): CancelablePromise<WebhookModel> {
                            return __request(OpenAPI, {
                                method: 'POST',
                                url: '/v0.1/companies/{companyId}/webhooks',
                                path: {
                                    'companyId': companyId,
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
                         * Requires access level: CompanyAdmin. Requires module: Webhooks.
                         * @param companyId
                         * @param requestBody
                         * @returns WebhookModel Created
                         * @throws ApiError
                         */
                        public static installWebhookManifest(
                            companyId: number,
                            requestBody?: Array<WebhookAddModel>,
                        ): CancelablePromise<Array<WebhookModel>> {
                            return __request(OpenAPI, {
                                method: 'POST',
                                url: '/v0.1/companies/{companyId}/webhooks/manifest',
                                path: {
                                    'companyId': companyId,
                                },
                                body: requestBody,
                                mediaType: 'application/json-patch+json',
                                errors: {
                                    400: `Bad Request`,
                                    401: `Unauthorized`,
                                    403: `Forbidden`,
                                    404: `Not Found`,
                                    500: `Server Error`,
                                },
                            });
                        }
                        /**
                         * Remove webhook
                         * Sample request:
                         *
                         * DELETE /v0.1/companies/1/webhooks/42a3a220-766c-eb11-8e13-000c29b4e92f
                         * @param companyId Company Id
                         * @param id Webhook Id
                         * @returns any All went well
                         * @throws ApiError
                         */
                        public static removeWebhook(
                            companyId: number,
                            id: string,
                        ): CancelablePromise<any> {
                            return __request(OpenAPI, {
                                method: 'DELETE',
                                url: '/v0.1/companies/{companyId}/webhooks/{id}',
                                path: {
                                    'companyId': companyId,
                                    'id': id,
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
                    }
