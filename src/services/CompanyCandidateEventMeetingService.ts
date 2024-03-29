/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventMeetingModel } from '../models/CompanyCandidateEventMeetingModel';
import type { EventMeetingAddEditModel } from '../models/EventMeetingAddEditModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateEventMeetingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates meeting event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */
    public companyCandidateEventMeeting(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<CompanyCandidateEventMeetingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
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
     * Update meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Meeting Event details
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */
    public updateCompanyCandidateEventMeeting(
        companyId: number,
        candidateId: number,
        id: string,
        requestBody?: EventMeetingAddEditModel,
    ): CancelablePromise<CompanyCandidateEventMeetingModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
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
     * Delete company candidate meeting event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCandidateEventMeeting(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
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
     * Add new meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Meeting Event details
     * @returns any All went well
     * @returns CompanyCandidateEventMeetingModel Created
     * @throws ApiError
     */
    public newCompanyCandidateEventMeeting(
        companyId: number,
        candidateId: number,
        requestBody?: EventMeetingAddEditModel,
    ): CancelablePromise<any | CompanyCandidateEventMeetingModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings',
            path: {
                'companyId': companyId,
                'candidateId': candidateId,
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
