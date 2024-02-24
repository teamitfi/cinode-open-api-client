/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventTaskModel } from '../models/CompanyCandidateEventTaskModel';
import type { EventTaskAddEditModel } from '../models/EventTaskAddEditModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateEventTaskService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates task event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */
    public companyCandidateEventTask(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<CompanyCandidateEventTaskModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}',
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
     * Update task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Task Event details
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */
    public updateCompanyCandidateEventTask(
        companyId: number,
        candidateId: number,
        id: string,
        requestBody?: EventTaskAddEditModel,
    ): CancelablePromise<CompanyCandidateEventTaskModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}',
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
     * Delete company candidate task event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCandidateEventTask(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}',
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
     * Add new task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Task Event details
     * @returns any All went well
     * @returns CompanyCandidateEventTaskModel Created
     * @throws ApiError
     */
    public newCompanyCandidateEventTask(
        companyId: number,
        candidateId: number,
        requestBody?: EventTaskAddEditModel,
    ): CancelablePromise<any | CompanyCandidateEventTaskModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks',
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
