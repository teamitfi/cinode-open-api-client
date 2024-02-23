/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserQuerySort } from './CompanyUserQuerySort';
import type { SortOrder } from './SortOrder';
export type CompanyUserQuerySortPageAndSortByModel = {
    sortBy?: CompanyUserQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

