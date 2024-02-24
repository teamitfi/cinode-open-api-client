/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassicCompanyUserResumeModel } from '../models/ClassicCompanyUserResumeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserResumeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get resume by id
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Resume Id
     * @returns ClassicCompanyUserResumeModel All went well
     * @throws ApiError
     */
    public getResume(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<ClassicCompanyUserResumeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/resumes/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
