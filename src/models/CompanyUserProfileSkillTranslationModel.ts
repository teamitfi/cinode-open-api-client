/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileTranslationModel } from './CompanyUserProfileTranslationModel';
import type { KeywordModel } from './KeywordModel';
import type { KeywordSynonymModel } from './KeywordSynonymModel';
export type CompanyUserProfileSkillTranslationModel = {
    keywordId?: number | null;
    keywordSynonymId?: number | null;
    keywordSynonym?: KeywordSynonymModel | null;
    keyword?: KeywordModel | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};

