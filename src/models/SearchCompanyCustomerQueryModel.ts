/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerQuerySortPageAndSortByModel } from './CompanyCustomerQuerySortPageAndSortByModel';
import type { StringComparisonOperator } from './StringComparisonOperator';
export type SearchCompanyCustomerQueryModel = {
    name?: string | null;
    nameOperator?: StringComparisonOperator;
    identification?: string | null;
    identificationOperator?: StringComparisonOperator;
    corporateIdentityNumber?: string | null;
    corporateIdentityNumberOperator?: StringComparisonOperator;
    pageAndSortBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
};

