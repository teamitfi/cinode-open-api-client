/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSkillModel } from '../models/CompanyUserSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserSkillsService {
    /**
     * Get skills list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */
    public static skills(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<CompanyUserSkillModel>> {
        return __request(OpenAPI, {
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
