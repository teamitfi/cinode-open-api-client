/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventTaskAddEditModel } from '../models/CompanyUserEventTaskAddEditModel';
import type { CompanyUserEventTaskModel } from '../models/CompanyUserEventTaskModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorEventTaskService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates new subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Task event details
     * @returns any All went well
     * @returns CompanyUserEventTaskModel Created
     * @throws ApiError
     */
    public newCompanyUserSubcontractorEventTask(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserEventTaskAddEditModel,
    ): CancelablePromise<any | CompanyUserEventTaskModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
     * Get subcontractors tasks events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    public companyUserSubcontractorEventTask(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<CompanyUserEventTaskModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}',
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
     * Updates subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Task event details
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    public updateCompanyUserSubcontractorEventTask(
        companyId: number,
        companyUserId: number,
        id: string,
        requestBody?: CompanyUserEventTaskAddEditModel,
    ): CancelablePromise<CompanyUserEventTaskModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}',
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
                500: `Server error`,
            },
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserSubcontractorEventTask(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}',
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
}
