/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamBaseModel } from '../models/TeamBaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyTeamsService {
    /**
     * Get teams list
     * @param companyId Company Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */
    public static companyTeams(
        companyId: number,
    ): CancelablePromise<Array<TeamBaseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/teams',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
    }
}
