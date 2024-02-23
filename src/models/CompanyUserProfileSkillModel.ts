/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileSkillHistoryModel } from './CompanyUserProfileSkillHistoryModel';
import type { CompanyUserProfileSkillTranslationModel } from './CompanyUserProfileSkillTranslationModel';
import type { KeywordModel } from './KeywordModel';
import type { Link } from './Link';
export type CompanyUserProfileSkillModel = {
    profileId?: number | null;
    level?: number | null;
    levelGoal?: number | null;
    levelGoalDeadline?: string | null;
    keyword?: KeywordModel | null;
    changeHistory?: Array<CompanyUserProfileSkillHistoryModel> | null;
    translations?: Array<CompanyUserProfileSkillTranslationModel> | null;
    favourite?: boolean;
    numberOfDaysWorkExperience?: number;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

