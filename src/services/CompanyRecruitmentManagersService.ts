/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyRecruitmentManagerModel } from '../models/CompanyRecruitmentManagerModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyRecruitmentManagersService {
    /**
     * Get recruitment managers
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyRecruitmentManagerModel All went well
     * @throws ApiError
     */
    public static recruitmentManagers(
        companyId: number,
    ): CancelablePromise<Array<CompanyRecruitmentManagerModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/recruitment/managers',
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
