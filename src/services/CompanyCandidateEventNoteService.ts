/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateEventNoteModel } from '../models/CompanyCandidateEventNoteModel';
import type { EventNoteAddEditModel } from '../models/EventNoteAddEditModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateEventNoteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates note event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */
    public companyCandidateEventNote(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<CompanyCandidateEventNoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}',
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
     * Update note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Note Event details
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */
    public updateCompanyCandidateEventNote(
        companyId: number,
        candidateId: number,
        id: string,
        requestBody?: EventNoteAddEditModel,
    ): CancelablePromise<CompanyCandidateEventNoteModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}',
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
     * Delete company candidate note event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyCandidateEventNote(
        companyId: number,
        candidateId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}',
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
     * Add new note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Note Event details
     * @returns any All went well
     * @returns CompanyCandidateEventNoteModel Created
     * @throws ApiError
     */
    public newCompanyCandidateEventNote(
        companyId: number,
        candidateId: number,
        requestBody?: EventNoteAddEditModel,
    ): CancelablePromise<any | CompanyCandidateEventNoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes',
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
