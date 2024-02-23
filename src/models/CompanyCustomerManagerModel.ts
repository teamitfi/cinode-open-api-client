/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { CompanyUserType } from './CompanyUserType';
import type { Link } from './Link';
export type CompanyCustomerManagerModel = {
    companyCustomerManagerId?: number | null;
    customerId?: number | null;
    customer?: CompanyCustomerBaseModel | null;
    /**
     * @deprecated
     */
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    links?: Array<Link> | null;
};

