/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserEventNoteAddEditModel } from '../models/CompanyUserEventNoteAddEditModel';
import type { CompanyUserEventNoteModel } from '../models/CompanyUserEventNoteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserEmployeeEventNoteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    public companyUserEmployeeEventNote(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<CompanyUserEventNoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}',
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
     * Updates employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Note event details
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    public updateCompanyUserEmployeeEventNote(
        companyId: number,
        companyUserId: number,
        id: string,
        requestBody?: CompanyUserEventNoteAddEditModel,
    ): CancelablePromise<CompanyUserEventNoteModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}',
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
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyUserEmployeeEventNote(
        companyId: number,
        companyUserId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}',
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
     * Creates new employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Note event details
     * @returns any All went well
     * @returns CompanyUserEventNoteModel Created
     * @throws ApiError
     */
    public newCompanyUserEmployeeEventNote(
        companyId: number,
        companyUserId: number,
        requestBody?: CompanyUserEventNoteAddEditModel,
    ): CancelablePromise<any | CompanyUserEventNoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes',
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
