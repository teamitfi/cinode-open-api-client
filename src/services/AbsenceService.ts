/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsenceAddEditModel } from '../models/AbsenceAddEditModel';
import type { AbsencePeriodModel } from '../models/AbsencePeriodModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AbsenceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get absence period by id
     * @param companyId Your company id
     * @param companyUserId The id of the actual user
     * @param id The id for the requested absence period
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */
    public absence(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<AbsencePeriodModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
     * Update Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Absence Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */
    public updateAbsence(
        companyId: number,
        companyUserId: number,
        id: number,
        requestBody?: AbsenceAddEditModel,
    ): CancelablePromise<AbsencePeriodModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}',
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
     * Delete absence
     * @param companyId Company Id
     * @param companyUserId Customer Id
     * @param id Customer Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteAbsence(
        companyId: number,
        companyUserId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
     * Create Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns AbsencePeriodModel Created
     * @throws ApiError
     */
    public newAbsence(
        companyId: number,
        companyUserId: number,
        requestBody?: AbsenceAddEditModel,
    ): CancelablePromise<any | AbsencePeriodModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/absences',
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
