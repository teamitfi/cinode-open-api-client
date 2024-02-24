/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchSkillQueryModel } from '../models/SearchSkillQueryModel';
import type { SearchSkillResultModel } from '../models/SearchSkillResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SkillSearchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search users by skill keyword id
     * @param companyId Company Id
     * @param requestBody SearchSkillQueryModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */
    public searchSkill(
        companyId: number,
        requestBody?: SearchSkillQueryModel,
    ): CancelablePromise<SearchSkillResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/skills/search',
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
