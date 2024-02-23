/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyTeamMembersService {
    /**
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public static getTeamMembers(
        companyId: number,
        teamId: number,
    ): CancelablePromise<Array<TeamMemberModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members',
            path: {
                'companyId': companyId,
                'teamId': teamId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
