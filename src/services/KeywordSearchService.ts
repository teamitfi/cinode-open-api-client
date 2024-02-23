/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordModel } from '../models/KeywordModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KeywordSearchService {
    /**
     * Search keywords by term
     * @param companyId Company Id
     * @param term Search term
     * @returns KeywordModel All went well
     * @throws ApiError
     */
    public static searchKeyword(
        companyId: number,
        term: string,
    ): CancelablePromise<Array<KeywordModel>> {
        return __request(OpenAPI, {
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
