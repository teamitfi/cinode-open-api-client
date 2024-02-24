/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyModel } from '../models/CurrencyModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCurrenciesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company currencies
     * @param companyId Company Id
     * @returns CurrencyModel All went well
     * @throws ApiError
     */
    public companyCurrencies(
        companyId: number,
    ): CancelablePromise<Array<CurrencyModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/currencies',
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
