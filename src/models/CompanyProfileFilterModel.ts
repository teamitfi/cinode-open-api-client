/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyProfileSortPageAndSortByModel } from './CompanyProfileSortPageAndSortByModel';
export type CompanyProfileFilterModel = {
    /**
     * If set to true, the results will include only Profiles created within the last X days
     */
    createdOffsetDays?: number | null;
    /**
     * If set to true, the results will include only Profiles updated within the last X days
     */
    updatedOffsetDays?: number | null;
    pageAndSortBy?: CompanyProfileSortPageAndSortByModel | null;
};

