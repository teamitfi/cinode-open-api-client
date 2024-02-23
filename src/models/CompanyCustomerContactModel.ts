/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTagModel } from './CompanyTagModel';
import type { Link } from './Link';
export type CompanyCustomerContactModel = {
    title?: string | null;
    phone1?: string | null;
    phone2?: string | null;
    comments?: string | null;
    createdDateTime?: string;
    tags?: Array<CompanyTagModel> | null;
    id?: number;
    companyId?: number;
    customerId?: number;
    slug?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    links?: Array<Link> | null;
};

