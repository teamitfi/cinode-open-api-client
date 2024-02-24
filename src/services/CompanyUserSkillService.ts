/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSkillModel } from '../models/CompanyUserSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSkillService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Skill Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */
    public skill(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserSkillModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/skills/{id}',
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
