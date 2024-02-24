/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileExtSkillAddEditModel } from '../models/CompanyUserProfileExtSkillAddEditModel';
import type { CompanyUserProfileExtSkillModel } from '../models/CompanyUserProfileExtSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileExtSkillService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile external skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileExtSkill Id
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */
    public companyUserProfileExtSkill(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileExtSkillModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'id': id,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Update Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */
    public updateCompanyUserProfileExtSkill(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileExtSkillAddEditModel,
    ): CancelablePromise<CompanyUserProfileExtSkillModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Delete Extra Skill Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserProfileExtSkill(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}',
            path: {
                'id': id,
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
    /**
     * Create Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileExtSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileExtSkillModel Created
     * @throws ApiError
     */
    public newCompanyUserProfileExtSkill(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileExtSkillAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileExtSkillModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
