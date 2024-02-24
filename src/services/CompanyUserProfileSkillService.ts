/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileSkillAddModel } from '../models/CompanyUserProfileSkillAddModel';
import type { CompanyUserProfileSkillEditModel } from '../models/CompanyUserProfileSkillEditModel';
import type { CompanyUserProfileSkillModel } from '../models/CompanyUserProfileSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileSkillService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileSkill Id
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */
    public companyUserProfileSkill(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileSkillModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}',
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
     * Update Profile Skill
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileSkillEditModel
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */
    public updateCompanyUserProfileSkill(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileSkillEditModel,
    ): CancelablePromise<CompanyUserProfileSkillModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}',
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
     * Delete Profile Skill
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserProfileSkill(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}',
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
     * Add Skill to profile
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileSkillModel Created
     * @throws ApiError
     */
    public newCompanyUserProfileSkill(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileSkillAddModel,
    ): CancelablePromise<any | CompanyUserProfileSkillModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills',
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
