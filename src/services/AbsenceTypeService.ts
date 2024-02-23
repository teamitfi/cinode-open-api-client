/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsenceTypeModel } from '../models/AbsenceTypeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AbsenceTypeService {
    /**
     * Get absence types for company
     * @param companyId
     * @returns AbsenceTypeModel All went well
     * @throws ApiError
     */
    public static absenceTypes(
        companyId: number,
    ): CancelablePromise<Array<AbsenceTypeModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/companies/{companyId}/absence/types',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`,
            },
        });
    }
}
