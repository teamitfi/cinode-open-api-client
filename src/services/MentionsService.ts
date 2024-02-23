/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MentionTextModel } from '../models/MentionTextModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MentionsService {
    /**
     * Translates any mention-ids in a text to their human readable form.
     * Translations are access restricted, if you don't have enough access
     * to get the name of an id, it won't be translated.
     * @param companyId Company Id
     * @param requestBody The model with one property, value, which contains the text containing the mentions you're looking to translate.  Example of a text with a mention inside: `"Hello @(1|123456) can you please consider this role?"`
     * @returns string All went well
     * @throws ApiError
     */
    public static translateMentions(
        companyId: number,
        requestBody?: MentionTextModel,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/mentions/to-natural-text',
            path: {
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
