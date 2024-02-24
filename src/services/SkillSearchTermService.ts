/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchSkillResultModel } from '../models/SearchSkillResultModel';
import type { SkillSearchQueryTermModel } from '../models/SkillSearchQueryTermModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SkillSearchTermService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search users with skills by term (string value)
     * @param companyId Company Id
     * @param requestBody SkillSearchQueryTermModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */
    public searchSkillTerm(
        companyId: number,
        requestBody?: SkillSearchQueryTermModel,
    ): CancelablePromise<SearchSkillResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/skills/search/term',
            path: {
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
