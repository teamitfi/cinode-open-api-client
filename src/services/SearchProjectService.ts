/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchProjectQueryModel } from '../models/SearchProjectQueryModel';
import type { SearchProjectsResultModel } from '../models/SearchProjectsResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchProjectService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get projects list from search criteria
     * Sample request
     * {
         * "pipelines": [4],
         * "projectStates": [0],
         * "PageAndSortBy": {
             * "SortBy": "0",
             * "SortOrder": "1",
             * "Page": "1",
             * "ItemsPerPage": "15",
             * }
             * }
             * SortBy Parameter can be:
             * CreatedDateTime=0 // Default
             * Title=1
             * Identifier=2
             * CustomerIdentifier=3
             * SeoId=4
             * UpdatedDateTime=6
             * LastTouchDateTime=7
             * @param companyId Company Id
             * @param requestBody SearchCompanyCustomerQueryModel
             * @returns SearchProjectsResultModel All went well
             * @throws ApiError
             */
            public searchProject(
                companyId: number,
                requestBody?: SearchProjectQueryModel,
            ): CancelablePromise<SearchProjectsResultModel> {
                return this.httpRequest.request({
                    method: 'POST',
                    url: '/v0.1/companies/{companyId}/projects/search',
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
