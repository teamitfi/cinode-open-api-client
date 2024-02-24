/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchCompanyCandidateQueryModel } from '../models/SearchCompanyCandidateQueryModel';
import type { SearchCompanyCandidateResultModel } from '../models/SearchCompanyCandidateResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchCompanyCandidateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get company candidates list from search criteria
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/search
     * {
         * "term": "candidate property value",
         * "rating": 3
         * "status": 0,
         * "sources": [],
         * "noRecruiter": false,
         * "recruiters": [],
         * "states": [0],
         * "pipeline": null,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15
             * },
             * "pipelines": []
             * }
             * @param companyId Company Id
             * @param requestBody SearchCompanyCandidateQueryModel
             * @returns SearchCompanyCandidateResultModel All went well
             * @throws ApiError
             */
            public searchCompanyCandidate(
                companyId: number,
                requestBody?: SearchCompanyCandidateQueryModel,
            ): CancelablePromise<SearchCompanyCandidateResultModel> {
                return this.httpRequest.request({
                    method: 'POST',
                    url: '/v0.1/companies/{companyId}/candidates/search',
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
