/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamBaseModel } from '../models/TeamBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserTeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get teams for team member
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */
    public userTeams(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<TeamBaseModel>> {
        return this.httpRequest.request({
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
