/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityFilterModel } from '../models/AvailabilityFilterModel';
import type { AvailabilityModel } from '../models/AvailabilityModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AvailabilityService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get availability for company users. Omitting companyUserId gets availability for all company users in company.
     * @param companyId Your Cinode Company id
     * @param requestBody Filter options
     * @returns AvailabilityModel All went well
     * @throws ApiError
     */
    public searchAvailability(
        companyId: number,
        requestBody?: AvailabilityFilterModel,
    ): CancelablePromise<Array<AvailabilityModel>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/availability',
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
