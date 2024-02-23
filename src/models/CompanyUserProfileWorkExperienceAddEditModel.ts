/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileWorkExperienceSkillAddModel } from './CompanyUserProfileWorkExperienceSkillAddModel';
import type { LocationModel } from './LocationModel';
import type { SaveToApiOption } from './SaveToApiOption';
export type CompanyUserProfileWorkExperienceAddEditModel = {
    title: string;
    description: string;
    employer: string;
    startDate: string;
    endDate?: string | null;
    isCurrent?: boolean | null;
    location?: LocationModel | null;
    url?: string | null;
    skills?: Array<CompanyUserProfileWorkExperienceSkillAddModel> | null;
    saveTo?: SaveToApiOption;
};

