/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBaseModel } from './CompanyBaseModel';
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { KeywordModel } from './KeywordModel';
import type { KeywordSynonymModel } from './KeywordSynonymModel';
import type { Link } from './Link';
import type { ProjectAssignmentBaseModel } from './ProjectAssignmentBaseModel';
import type { ProjectBaseModel } from './ProjectBaseModel';
export type ProjectAssignmentSkillModel = {
    projectAssignment?: ProjectAssignmentBaseModel | null;
    project?: ProjectBaseModel | null;
    company?: CompanyBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    keywordSynonymId?: number;
    keywordSynonym?: KeywordSynonymModel | null;
    isMandatory?: boolean;
    companyId?: number;
    customerId?: number;
    projectId?: number;
    projectAssignmentId?: number;
    keywordId?: number;
    level?: number;
    keyword?: KeywordModel | null;
    links?: Array<Link> | null;
};

