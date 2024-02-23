/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserResumeBaseModel } from '../models/CompanyUserResumeBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserResumesService {
    /**
     * Get company user resumes list
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserResumeBaseModel All went well
     * @throws ApiError
     */
    public static companyUserResumes(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserResumeBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/resumes',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`,
            },
        });
    }
}
