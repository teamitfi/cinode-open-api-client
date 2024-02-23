/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerContactModel } from './CompanyCustomerContactModel';
import type { CompanyCustomerContactQuerySortPageAndSortByModel } from './CompanyCustomerContactQuerySortPageAndSortByModel';
export type SearchCompanyCustomerContactResultModel = {
    pagedAndSortedBy?: CompanyCustomerContactQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCustomerContactModel> | null;
    hits?: number;
    totalItems?: number;
};

