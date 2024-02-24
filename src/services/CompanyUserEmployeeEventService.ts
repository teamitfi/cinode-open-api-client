/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventModel } from '../models/CompanyUserEventModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserEmployeeEventService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get employee event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventModel All went well
     * @throws ApiError
     */
    public companyUserEmployeeEvent(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<CompanyUserEventModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
}
