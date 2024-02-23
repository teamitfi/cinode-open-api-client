/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { Status } from './Status';
export type CompanyCustomerBaseModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    identification?: string | null;
    seoId?: string | null;
    /**
     * @deprecated
     */
    status?: Status;
    links?: Array<Link> | null;
};

