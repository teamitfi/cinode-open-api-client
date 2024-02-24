/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMemberAddModel } from '../models/TeamMemberAddModel';
import type { TeamMemberEditModel } from '../models/TeamMemberEditModel';
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { TeamMemberMoveModel } from '../models/TeamMemberMoveModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyTeamMemberService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get team member
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    public getTeamMember(
        companyId: number,
        teamId: number,
        id: number,
    ): CancelablePromise<TeamMemberModel> {
        return this.httpRequest.request({
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
    public updateTeamMember(
        companyId: number,
        teamId: number,
        id: number,
        requestBody?: TeamMemberEditModel,
    ): CancelablePromise<TeamMemberModel> {
        return this.httpRequest.request({
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
    public removeTeamMember(
        companyId: number,
        teamId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
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
    public addTeamMember(
        companyId: number,
        teamId: number,
        requestBody?: TeamMemberAddModel,
    ): CancelablePromise<TeamMemberModel> {
        return this.httpRequest.request({
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
    public moveTeamMember(
        companyId: number,
        teamId: number,
        id: number,
        requestBody?: TeamMemberMoveModel,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
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
