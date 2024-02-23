/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from '../models/CompanyUserExtendedModel';
import type { TeamMemberAddModel } from '../models/TeamMemberAddModel';
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyTeamUsersService {
    /**
     * @deprecated
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public static getTeamUsers(
        companyId: number,
        teamId: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/users',
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
    /**
     * @deprecated
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public static addTeamUser(
        companyId: number,
        teamId: number,
        requestBody?: TeamMemberAddModel,
    ): CancelablePromise<Array<TeamMemberModel>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/users',
            path: {
                'companyId': companyId,
                'teamId': teamId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * @deprecated
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public static removeTeamUser(
        companyId: number,
        teamId: number,
        id: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/users/{id}',
            path: {
                'companyId': companyId,
                'teamId': teamId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
}
