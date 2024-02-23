/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordModel } from './KeywordModel';
import type { Link } from './Link';
export type ProjectAssignmentSkillBaseModel = {
    companyId?: number;
    customerId?: number;
    projectId?: number;
    projectAssignmentId?: number;
    keywordId?: number;
    level?: number;
    keyword?: KeywordModel | null;
    links?: Array<Link> | null;
};

