/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnersFilterModel } from '../models/PartnersFilterModel';
import type { PartnersOverviewModel } from '../models/PartnersOverviewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PartnersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Partners by filter
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns PartnersOverviewModel All went well
     * @throws ApiError
     */
    public searchPartners(
        companyId: number,
        requestBody?: PartnersFilterModel,
    ): CancelablePromise<PartnersOverviewModel> {
        return this.httpRequest.request({
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
