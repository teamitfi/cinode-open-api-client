/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyProfileSort } from './CompanyProfileSort';
import type { SortOrder } from './SortOrder';
export type CompanyProfileSortPageAndSortByModel = {
    /**
     * 0 - Id (Default),
     * 1 - CompanyUserId,
     * 2 - CreatedDateTime,
     * 3 - UpdatedDateTime
     */
    sortBy?: CompanyProfileSort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

