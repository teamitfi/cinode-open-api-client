/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateBaseModel } from './CompanyCandidateBaseModel';
import type { CompanyCandidateQuerySortPageAndSortByModel } from './CompanyCandidateQuerySortPageAndSortByModel';
export type SearchCompanyCandidateResultModel = {
    pagedAndSortedBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCandidateBaseModel> | null;
    hits?: number;
    totalItems?: number;
};

