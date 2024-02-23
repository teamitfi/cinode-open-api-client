/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileSkillModel } from './CompanyUserProfileSkillModel';
import type { CompanyUserProfileWorkExperienceTranslationModel } from './CompanyUserProfileWorkExperienceTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileWorkExperienceModel = {
    profileId?: number | null;
    id?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    isCurrent?: boolean | null;
    translations?: Array<CompanyUserProfileWorkExperienceTranslationModel> | null;
    locationId?: number | null;
    skills?: Array<CompanyUserProfileSkillModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

