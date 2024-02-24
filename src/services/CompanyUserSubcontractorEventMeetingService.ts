/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventMeetingAddEditModel } from '../models/CompanyUserEventMeetingAddEditModel';
import type { CompanyUserEventMeetingModel } from '../models/CompanyUserEventMeetingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserSubcontractorEventMeetingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Meeting event Id
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    public companyUserSubcontractorEventMeeting(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<CompanyUserEventMeetingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}',
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
     * Updates subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Meeting event details
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    public updateCompanyUserSubcontractorEventMeeting(
        companyId: number,
        companyUserId: number,
        id: string,
        requestBody?: CompanyUserEventMeetingAddEditModel,
    ): CancelablePromise<CompanyUserEventMeetingModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}',
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
    public deleteCompanyUserSubcontractorEventMeeting(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}',
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
     * Creates new subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Meeting event details
     * @returns any All went well
     * @returns CompanyUserEventMeetingModel Created
     * @throws ApiError
     */
    public newCompanyUserSubcontractorEventMeeting(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserEventMeetingAddEditModel,
    ): CancelablePromise<any | CompanyUserEventMeetingModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings',
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
}
