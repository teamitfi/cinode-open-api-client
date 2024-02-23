/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { Link } from './Link';
export type CompanyImageModel = {
    id?: number;
    imageFileName?: string;
    extension?: string | null;
    companyId?: number;
    created?: string;
    assignedToCompanyUser?: CompanyUserBaseModel | null;
    uploadedByCompanyUser?: CompanyUserBaseModel | null;
    links?: Array<Link> | null;
};

