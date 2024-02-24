/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagModel } from '../models/CompanyTagModel';
import type { CompanyUserModel } from '../models/CompanyUserModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyUserTagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Edit Tags for User
     * Note:
     *
     * Posted tags will replace any existing tags for the user.
     * A new tag will be created if the id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/users/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-new",
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param companyUserId CompanyUser Id
                 * @param requestBody CompanyTagModel[]
                 * @returns CompanyUserModel All went well
                 * @throws ApiError
                 */
                public editCompanyUserTags(
                    companyId: number,
                    companyUserId: number,
                    requestBody?: Array<CompanyTagModel>,
                ): CancelablePromise<CompanyUserModel> {
                    return this.httpRequest.request({
                        method: 'POST',
                        url: '/v0.1/companies/{companyId}/users/{companyUserId}/tags',
                        path: {
                            'companyId': companyId,
                            'companyUserId': companyUserId,
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
