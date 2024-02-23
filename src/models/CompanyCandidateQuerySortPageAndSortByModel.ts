/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateQuerySort } from './CompanyCandidateQuerySort';
import type { SortOrder } from './SortOrder';
export type CompanyCandidateQuerySortPageAndSortByModel = {
    sortBy?: CompanyCandidateQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

