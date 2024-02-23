/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { ExtentType } from './ExtentType';
import type { Link } from './Link';
import type { ProjectBaseModel } from './ProjectBaseModel';
export type ProjectAssignmentBaseModel = {
    companyId?: number;
    customerId?: number;
    projectId?: number;
    project?: ProjectBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    id?: number;
    title?: string | null;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    extentType?: ExtentType;
    extent?: number | null;
    links?: Array<Link> | null;
};

