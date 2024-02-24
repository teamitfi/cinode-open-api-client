/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserFullModel } from '../models/CompanyUserFullModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserFullService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company user, including financial fields, by id
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    public userFull(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyUserFullModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users-full/{id}',
            path: {
                'companyId': companyId,
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
