/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventBaseModel } from '../models/CompanyUserEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserEmployeeEventsService {
    /**
     * Get employee events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    public static companyUserEmployeeEvents(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserEventBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`,
            },
        });
    }
}