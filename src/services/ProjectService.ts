/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAddEditModel } from '../models/ProjectAddEditModel';
import type { ProjectModel } from '../models/ProjectModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectService {
    /**
     * Get project by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    public static project(
        companyId: number,
        id: number,
    ): CancelablePromise<ProjectModel> {
        return __request(OpenAPI, {
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
    public static updateCompanyProject(
        id: number,
        companyId: number,
        requestBody?: ProjectAddEditModel,
    ): CancelablePromise<ProjectModel> {
        return __request(OpenAPI, {
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
    public static deleteCompanyProject(
        companyId: number,
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static newCompanyProject(
        companyId: number,
        requestBody?: ProjectAddEditModel,
    ): CancelablePromise<ProjectModel> {
        return __request(OpenAPI, {
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
