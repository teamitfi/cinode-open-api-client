/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsencePeriodDtoModel } from '../models/AbsencePeriodDtoModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AbsencesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get absence period by company user id
     * @param companyId Your Cinode Company id
     * @param companyUserId The id of the actual User
     * @returns AbsencePeriodDtoModel All went well
     * @throws ApiError
     */
    public absences(
        companyId: number,
        companyUserId: number,
    ): CancelablePromise<Array<AbsencePeriodDtoModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v0.1/companies/{companyId}/users/{companyUserId}/absences',
            path: {
                'companyId': companyId,
                'companyUserId': companyUserId,
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
