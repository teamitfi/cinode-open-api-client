/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyTeamMembersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public getTeamMembers(
        companyId: number,
        teamId: number,
    ): CancelablePromise<Array<TeamMemberModel>> {
        return this.httpRequest.request({
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
