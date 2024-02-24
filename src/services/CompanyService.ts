/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyModel } from '../models/CompanyModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company by id
     * @param companyId CompanyId
     * @returns CompanyModel All went well
     * @throws ApiError
     */
    public company(
        companyId: number,
    ): CancelablePromise<CompanyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}',
            path: {
                'companyId': companyId,
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
