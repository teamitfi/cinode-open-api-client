/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyResumeTemplateBaseModel } from './CompanyResumeTemplateBaseModel';
import type { CompanyResumeTemplateLanguageModel } from './CompanyResumeTemplateLanguageModel';
import type { CreatedModel } from './CreatedModel';
import type { Link } from './Link';
import type { UpdatedModel } from './UpdatedModel';
export type CompanyUserResumeBaseModel = {
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    created?: CreatedModel | null;
    updated?: UpdatedModel | null;
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    language?: CompanyResumeTemplateLanguageModel | null;
    template?: CompanyResumeTemplateBaseModel | null;
    isPublic?: boolean;
    links?: Array<Link> | null;
};

