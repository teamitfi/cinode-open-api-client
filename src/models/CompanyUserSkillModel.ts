/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordModel } from './KeywordModel';
import type { Link } from './Link';
export type CompanyUserSkillModel = {
    companyId?: number;
    companyUserId?: number;
    numberOfDaysWorkExperience?: number;
    profileId?: number | null;
    id?: number | null;
    level?: number | null;
    levelGoal?: number | null;
    levelGoalDeadline?: string | null;
    keyword?: KeywordModel | null;
    favourite?: boolean;
    links?: Array<Link> | null;
};

