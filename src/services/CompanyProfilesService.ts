/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyProfileFilterModel } from '../models/CompanyProfileFilterModel';
import type { CompanyProfilesModel } from '../models/CompanyProfilesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyProfilesService {
    /**
     * Get profiles list
     * Sample request:
     *
     * POST /v0.1/companies/1/profiles
     * {
         * "createdOffsetDays": 90,
         * "updatedOffsetDays": 30,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15,
             * "order": 0,
             * "sortBy": 1
             * }
             * }
             * @param companyId Company Id
             * @param requestBody Company Profile Filter
             * @returns CompanyProfilesModel All went well
             * @throws ApiError
             */
            public static companyProfiles(
                companyId: number,
                requestBody?: CompanyProfileFilterModel,
            ): CancelablePromise<CompanyProfilesModel> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v0.1/companies/{companyId}/profiles',
                    path: {
                        'companyId': companyId,
                    },
                    body: requestBody,
                    mediaType: 'application/json-patch+json',
                    errors: {
                        400: `Incorrect request`,
                        401: `Unauthorized request`,
                        403: `Forbidden request`,
                        500: `Server error`,
                    },
                });
            }
        }
