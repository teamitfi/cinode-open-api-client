/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMemberAddModel } from '../models/TeamMemberAddModel';
import type { TeamMemberEditModel } from '../models/TeamMemberEditModel';
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { TeamMemberMoveModel } from '../models/TeamMemberMoveModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyTeamMemberService {
    /**
     * Get team member
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public static getTeamMember(
        companyId: number,
        teamId: number,
        id: number,
    ): CancelablePromise<TeamMemberModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members/{id}',
            path: {
                'companyId': companyId,
                'teamId': teamId,
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
    /**
     * Update team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberEditModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public static updateTeamMember(
        companyId: number,
        teamId: number,
        id: number,
        requestBody?: TeamMemberEditModel,
    ): CancelablePromise<TeamMemberModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members/{id}',
            path: {
                'companyId': companyId,
                'teamId': teamId,
                'id': id,
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
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */
    public static removeTeamMember(
        companyId: number,
        teamId: number,
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members/{id}',
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
    /**
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public static addTeamMember(
        companyId: number,
        teamId: number,
        requestBody?: TeamMemberAddModel,
    ): CancelablePromise<TeamMemberModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members',
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
     * Move team member and associated bookings to another team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberMoveModel
     * @returns any All went well
     * @throws ApiError
     */
    public static moveTeamMember(
        companyId: number,
        teamId: number,
        id: number,
        requestBody?: TeamMemberMoveModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/members/{id}/move',
            path: {
                'companyId': companyId,
                'teamId': teamId,
                'id': id,
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
}
