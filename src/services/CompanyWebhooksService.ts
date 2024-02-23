/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookModel } from '../models/WebhookModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyWebhooksService {
    /**
     * Get company webhooks
     * Sample request:
     *
     * GET /v0.1/companies/1/webhooks
     * @param companyId Company Id
     * @returns WebhookModel All went well
     * @throws ApiError
     */
    public static companyWebhooks(
        companyId: number,
    ): CancelablePromise<Array<WebhookModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/webhooks',
            path: {
                'companyId': companyId,
            },
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
