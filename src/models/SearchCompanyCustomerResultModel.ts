/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { CompanyCustomerQuerySortPageAndSortByModel } from './CompanyCustomerQuerySortPageAndSortByModel';
export type SearchCompanyCustomerResultModel = {
    pagedAndSortedBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCustomerBaseModel> | null;
    hits?: number;
    totalItems?: number;
};

