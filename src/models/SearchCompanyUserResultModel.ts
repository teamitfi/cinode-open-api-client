/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserExtendedModel } from './CompanyUserExtendedModel';
import type { CompanyUserQuerySortPageAndSortByModel } from './CompanyUserQuerySortPageAndSortByModel';
export type SearchCompanyUserResultModel = {
    pagedAndSortedBy?: CompanyUserQuerySortPageAndSortByModel | null;
    result?: Array<CompanyUserExtendedModel> | null;
    hits?: number;
    totalItems?: number;
};

