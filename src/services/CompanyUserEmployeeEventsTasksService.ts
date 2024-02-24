/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventBaseModel } from '../models/CompanyUserEventBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserEmployeeEventsTasksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get employee tasks events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    public companyUserEmployeeEventTaskList(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserEventBaseModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
