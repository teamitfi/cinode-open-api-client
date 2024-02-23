/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateQuerySortPageAndSortByModel } from './CompanyCandidateQuerySortPageAndSortByModel';
import type { CompanyCandidateState } from './CompanyCandidateState';
export type SearchCompanyCandidateQueryModel = {
    term?: string | null;
    rating?: number | null;
    states?: Array<CompanyCandidateState> | null;
    pipeline?: number | null;
    noRecruiter?: boolean;
    recruiters?: Array<number> | null;
    teams?: Array<number> | null;
    sources?: Array<number> | null;
    pageAndSortBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
};

