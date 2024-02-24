/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordModel } from '../models/KeywordModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class KeywordSearchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search keywords by term
     * @param companyId Company Id
     * @param term Search term
     * @returns KeywordModel All went well
     * @throws ApiError
     */
    public searchKeyword(
        companyId: number,
        term: string,
    ): CancelablePromise<Array<KeywordModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/keywords/search/{term}',
            path: {
                'companyId': companyId,
                'term': term,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
