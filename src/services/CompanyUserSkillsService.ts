/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSkillModel } from '../models/CompanyUserSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSkillsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get skills list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */
    public skills(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserSkillModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/skills',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
