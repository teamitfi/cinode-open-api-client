/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecruitmentSourceModel } from '../models/RecruitmentSourceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RecruitmentSourcesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get recruitment sources
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns RecruitmentSourceModel All went well
     * @throws ApiError
     */
    public recruitmentSources(
        companyId: number,
    ): CancelablePromise<Array<RecruitmentSourceModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/recruitment-sources',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
