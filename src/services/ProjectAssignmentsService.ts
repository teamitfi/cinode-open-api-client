/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentFilterModel } from '../models/ProjectAssignmentFilterModel';
import type { ProjectAssignmentWithStatusModel } from '../models/ProjectAssignmentWithStatusModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectAssignmentsService {
    /**
     * Get Roles by Filter
     * Rate limited, restricted to once per minute, max 1000 requests per day
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns ProjectAssignmentWithStatusModel All went well
     * @throws ApiError
     */
    public static searchRoles(
        companyId: number,
        requestBody?: ProjectAssignmentFilterModel,
    ): CancelablePromise<ProjectAssignmentWithStatusModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/roles',
            path: {
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
