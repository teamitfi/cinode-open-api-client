/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateSkillAddModel } from '../models/CompanyCandidateSkillAddModel';
import type { CompanyCandidateSkillModel } from '../models/CompanyCandidateSkillModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CompanyCandidateSkillsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a Skill to company candidate
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/19870/skills
     * {
         * "name": "SQL",
         * "companyCandidateId": 19870,
         * "keywordSynonymId": 577,
         * "languageId":1
         * }
         * @param companyId Company Id
         * @param candidateId CandidateId Id
         * @param requestBody CompanyCandidateSkillAddEditModel
         * @returns CompanyCandidateSkillModel All went well
         * @throws ApiError
         */
        public newCompanyCandidateSkill(
            companyId: number,
            candidateId: number,
            requestBody?: CompanyCandidateSkillAddModel,
        ): CancelablePromise<CompanyCandidateSkillModel> {
            return this.httpRequest.request({
                method: 'POST',
                url: '/v0.1/companies/{companyId}/candidates/{candidateId}/skills',
                path: {
                    'companyId': companyId,
                    'candidateId': candidateId,
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
        /**
         * Delete Candidate Skill
         * Sample request:
         *
         * DELETE /v0.1/companies/1/candidates/19870/skills/577
         * @param companyId Company Id
         * @param candidateId CandidateId Id
         * @param id Skill Keyword Id
         * @returns any All went well
         * @throws ApiError
         */
        public deleteCompanyCandidateSkill(
            companyId: number,
            candidateId: number,
            id: number,
        ): CancelablePromise<any> {
            return this.httpRequest.request({
                method: 'DELETE',
                url: '/v0.1/companies/{companyId}/candidates/{candidateId}/skills/{id}',
                path: {
                    'companyId': companyId,
                    'candidateId': candidateId,
                    'id': id,
                },
                errors: {
                    400: `Incorrect request`,
                    401: `Unauthorized request`,
                    500: `Server error`,
                },
            });
        }
    }
