/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectQuerySort } from './ProjectQuerySort';
import type { SortOrder } from './SortOrder';
export type ProjectQuerySortPageAndSortByModel = {
    sortBy?: ProjectQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};

