/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { Link } from './Link';
export type CompanySubcontractorGroupModel = {
    companyUserManager?: CompanyUserBaseModel | null;
    members?: Array<CompanyUserBaseModel> | null;
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};

