/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerQuerySort } from './CompanyCustomerQuerySort';
import type { SortOrder } from './SortOrder';
export type CompanyCustomerQuerySortPageAndSortByModel = {
    sortBy?: CompanyCustomerQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

