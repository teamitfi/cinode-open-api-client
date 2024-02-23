/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserAddModel } from '../models/CompanyUserAddModel';
import type { CompanyUserEditModel } from '../models/CompanyUserEditModel';
import type { CompanyUserFullModel } from '../models/CompanyUserFullModel';
import type { CompanyUserModel } from '../models/CompanyUserModel';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyUserService {
    /**
     * Get company user by id
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserModel All went well
     * @throws ApiError
     */
    public static user(
        companyId: number,
        id: number,
    ): CancelablePromise<CompanyUserModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{id}',
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
     * Update company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody CompanyUserEditModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    public static updateCompanyUser(
        companyId: number,
        id: number,
        requestBody?: CompanyUserEditModel,
    ): CancelablePromise<CompanyUserFullModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/companies/{companyId}/users/{id}',
            path: {
                'companyId': companyId,
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
     * Patch company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyUserEmployeePatchDocument` for full type information per property
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    public static patchCompanyUser(
        companyId: number,
        id: number,
        requestBody?: JsonPatchDocument,
    ): CancelablePromise<CompanyUserFullModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v0.1/companies/{companyId}/users/{id}',
            path: {
                'companyId': companyId,
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
     * Delete user from the system
     * Firstly, the user has to be disconnected, which can be done through a PATCH or PUT
     * This action is irreversible, use with caution
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param firstName CompanyUser FirstName
     * @param lastName CompanyUser LastName
     * @returns any All went well
     * @throws ApiError
     */
    public static deleteCompanyUser(
        companyId: number,
        id: number,
        firstName?: string,
        lastName?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/companies/{companyId}/users/{id}',
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
     * Add company user employee
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody CompanyUserAddModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    public static addCompanyUser(
        companyId: number,
        requestBody?: CompanyUserAddModel,
    ): CancelablePromise<CompanyUserFullModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/companies/{companyId}/users',
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
