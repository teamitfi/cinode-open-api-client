/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagModel } from '../models/CompanyTagModel';
import type { ProjectModel } from '../models/ProjectModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectTagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Edit Tags for Project
     * Note:
     *
     * Posted tags will replace any existing tags for the project.
     * A new tag will be created, if the id for a tag not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/projects/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param projectId Project Id
                 * @param requestBody CompanyTagModel
                 * @returns ProjectModel All went well
                 * @throws ApiError
                 */
                public editProjectTags(
                    companyId: number,
                    projectId: number,
                    requestBody?: Array<CompanyTagModel>,
                ): CancelablePromise<ProjectModel> {
                    return this.httpRequest.request({
                        method: 'POST',
                        url: '/v0.1/companies/{companyId}/projects/{projectId}/tags',
                        path: {
                            'companyId': companyId,
                            'projectId': projectId,
                        },
                        body: requestBody,
                        mediaType: 'application/json-patch+json',
                        errors: {
                            400: `Incorrect request`,
                            401: `Unauthorized request`,
                            403: `Forbidden request`,
                            404: `Resource not found`,
                            500: `Server error`,
                        },
                    });
                }
            }
