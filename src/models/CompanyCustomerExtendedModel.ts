/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerManagerModel } from './CompanyCustomerManagerModel';
import type { CompanyTagBaseModel } from './CompanyTagBaseModel';
import type { Link } from './Link';
import type { Status } from './Status';
export type CompanyCustomerExtendedModel = {
    email?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    managers?: Array<CompanyCustomerManagerModel> | null;
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

