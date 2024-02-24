/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAddEditModel } from '../models/ProjectAddEditModel';
import type { ProjectModel } from '../models/ProjectModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    public project(
        companyId: number,
        id: number,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/projects/{id}',
            path: {
                'companyId': companyId,
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
     * Update project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id Project Id
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    public updateCompanyProject(
        id: number,
        companyId: number,
        requestBody?: ProjectAddEditModel,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/projects/{id}',
            path: {
                'id': id,
                'companyId': companyId,
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
     * Delete project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns any All went well
     * @throws ApiError
     */
    public deleteCompanyProject(
        companyId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/projects/{id}',
            path: {
                'companyId': companyId,
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
     * Add project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    public newCompanyProject(
        companyId: number,
        requestBody?: ProjectAddEditModel,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v0.1/companies/{companyId}/projects',
            path: {
                'companyId': companyId,
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
