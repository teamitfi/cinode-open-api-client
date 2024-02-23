/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerContactQuerySort } from './CompanyCustomerContactQuerySort';
import type { SortOrder } from './SortOrder';
export type CompanyCustomerContactQuerySortPageAndSortByModel = {
    sortBy?: CompanyCustomerContactQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

