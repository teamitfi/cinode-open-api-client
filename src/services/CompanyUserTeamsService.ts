/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamBaseModel } from '../models/TeamBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserTeamsService {
    /**
     * Get teams for team member
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */
    public static userTeams(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<TeamBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/teams',
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
