/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserSubcontractorAddEditModel } from '../models/CompanyUserSubcontractorAddEditModel';
import type { CompanyUserSubcontractorModel } from '../models/CompanyUserSubcontractorModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserSubcontractorService {
    /**
     * Get company user by id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */
    public static companySubcontractor(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyUserSubcontractorModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/subcontractors/{id}',
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
     * Delete subcontractor from the system
     * This action is irreversible, use with caution
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id Subcontractor Id
     * @param firstName Subcontractor FirstName
     * @param lastName Subcontractor LastName
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanySubcontractor(
        companyId: number,
        id: number,
        firstName?: string,
        lastName?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/subcontractors/{id}',
            path: {
                'companyId': companyId,
                'id': id,
            },
            query: {
                'firstName': firstName,
                'lastName': lastName,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`,
            },
        });
    }
    /**
     * Add subcontractor
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody CompanyUserSubcontractorAddEditModel
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */
    public static addCompanyUserSubcontractor(
        companyId: number,
        requestBody?: CompanyUserSubcontractorAddEditModel,
    ): CancelablePromise<CompanyUserSubcontractorModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/subcontractors',
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
