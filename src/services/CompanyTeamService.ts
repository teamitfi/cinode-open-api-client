/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamAddEditModel } from '../models/TeamAddEditModel';
import type { TeamModel } from '../models/TeamModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyTeamService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get team by id
     * @param companyId Company Id
     * @param id Event Id
     * @returns TeamModel All went well
     * @throws ApiError
     */
    public team(
        companyId: number,
        id: number,
    ): CancelablePromise<TeamModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams/{id}',
            path: {
                'companyId': companyId,
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
     * Update team
     * Requires access level: CompanyAdmin.
     * @param id Team Id
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */
    public updateTeam(
        id: number,
        companyId: number,
        requestBody?: TeamAddEditModel,
    ): CancelablePromise<TeamModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/teams/{id}',
            path: {
                'id': id,
                'companyId': companyId,
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
     * Add team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */
    public newTeam(
        companyId: number,
        requestBody?: TeamAddEditModel,
    ): CancelablePromise<TeamModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/teams',
            path: {
                'companyId': companyId,
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
