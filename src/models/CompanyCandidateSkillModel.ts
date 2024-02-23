/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordModel } from './KeywordModel';
import type { KeywordSynonymModel } from './KeywordSynonymModel';
export type CompanyCandidateSkillModel = {
    companyCandidateId?: number;
    keywordId?: number;
    keyword?: KeywordModel | null;
    keywordSynonymId?: number;
    keywordSynonym?: KeywordSynonymModel | null;
};

