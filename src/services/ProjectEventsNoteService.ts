/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerEventNoteModel } from '../models/CustomerEventNoteModel';
import type { ProjectEventNoteAddEditModel } from '../models/ProjectEventNoteAddEditModel';
import type { ProjectEventNoteModel } from '../models/ProjectEventNoteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectEventsNoteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project event note by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    public projectEventNote(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<CustomerEventNoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
     * Update project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */
    public updateProjectNote(
        companyId: number,
        projectId: number,
        id: string,
        requestBody?: ProjectEventNoteAddEditModel,
    ): CancelablePromise<ProjectEventNoteModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
     * Delete project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteProjectNote(
        companyId: number,
        projectId: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
     * Add project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */
    public newProjectNote(
        companyId: number,
        projectId: number,
        requestBody?: ProjectEventNoteAddEditModel,
    ): CancelablePromise<ProjectEventNoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects/{projectId}/events/notes',
            path: {
                'companyId': companyId,
                'projectId': projectId,
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
