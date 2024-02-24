/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileTrainingAddEditModel } from '../models/CompanyUserProfileTrainingAddEditModel';
import type { CompanyUserProfileTrainingModel } from '../models/CompanyUserProfileTrainingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserProfileTrainingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get profile training by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileTraining Id
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */
    public companyUserProfileTraining(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<CompanyUserProfileTrainingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}',
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
     * Update Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */
    public updateCompanyUserProfileTraining(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: CompanyUserProfileTrainingAddEditModel,
    ): CancelablePromise<CompanyUserProfileTrainingModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}',
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
     * Delete Profile Training Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserProfileTraining(
        id: number,
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}',
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
     * Create Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileTrainingModel Created
     * @throws ApiError
     */
    public newCompanyUserProfileTraining(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserProfileTrainingAddEditModel,
    ): CancelablePromise<any | CompanyUserProfileTrainingModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings',
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
