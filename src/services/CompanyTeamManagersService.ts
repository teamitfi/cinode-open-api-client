/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from '../models/CompanyUserExtendedModel';
import type { TeamManagerEditModel } from '../models/TeamManagerEditModel';
import type { TeamManagerModel } from '../models/TeamManagerModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyTeamManagersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get team managers
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    public teamManagers(
        companyId: number,
        teamId: number,
    ): CancelablePromise<Array<CompanyUserExtendedModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams/{teamId}/managers',
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
     * Add team manager
     * Sample request:
     *
     * POST /v0.1/companies/1/teams/1234/managers
     * {
         * "teamId" : 1234,
         * "companyUserId" : 54632
         * }
         * @param companyId Company Id
         * @param teamId
         * @param requestBody TeamMemberEditModel
         * @returns TeamManagerModel All went well
         * @throws ApiError
         */
        public addTeamManager(
            companyId: number,
            teamId: string,
            requestBody?: TeamManagerEditModel,
        ): CancelablePromise<Array<TeamManagerModel>> {
            return this.httpRequest.request({
                method: 'POST',
                url: '/v0.1/companies/{companyId}/teams/{teamId}/managers',
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
         * Remove team manager
         * Sample request:
         *
         * DELETE /v0.1/companies/1/teams/1234/managers/54632
         * @param companyId Company Id
         * @param teamId Team Id
         * @param id User Id
         * @returns any All went well
         * @throws ApiError
         */
        public removeTeamManager(
            companyId: number,
            teamId: number,
            id: number,
        ): CancelablePromise<any> {
            return this.httpRequest.request({
                method: 'DELETE',
                url: '/v0.1/companies/{companyId}/teams/{teamId}/managers/{id}',
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
