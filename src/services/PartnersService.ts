/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnersFilterModel } from '../models/PartnersFilterModel';
import type { PartnersOverviewModel } from '../models/PartnersOverviewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartnersService {
    /**
     * Get Partners by filter
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns PartnersOverviewModel All went well
     * @throws ApiError
     */
    public static searchPartners(
        companyId: number,
        requestBody?: PartnersFilterModel,
    ): CancelablePromise<PartnersOverviewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/partners',
            path: {
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
