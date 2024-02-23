/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type CompanyCustomerContactBaseModel = {
    id?: number;
    companyId?: number;
    customerId?: number;
    slug?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    links?: Array<Link> | null;
};

