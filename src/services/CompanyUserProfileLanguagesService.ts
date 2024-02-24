/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfileLanguageModel } from '../models/ProfileLanguageModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileLanguagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Available Profile Languages
     * @returns ProfileLanguageModel All went well
     * @throws ApiError
     */
    public profileLanguages(): CancelablePromise<Array<ProfileLanguageModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/languages',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
