/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileCommitmentModel } from './CompanyUserProfileCommitmentModel';
import type { CompanyUserProfileEducationModel } from './CompanyUserProfileEducationModel';
import type { CompanyUserProfileEmployerModel } from './CompanyUserProfileEmployerModel';
import type { CompanyUserProfileExtSkillModel } from './CompanyUserProfileExtSkillModel';
import type { CompanyUserProfileLanguageModel } from './CompanyUserProfileLanguageModel';
import type { CompanyUserProfilePresentationModel } from './CompanyUserProfilePresentationModel';
import type { CompanyUserProfileReferenceModel } from './CompanyUserProfileReferenceModel';
import type { CompanyUserProfileSkillModel } from './CompanyUserProfileSkillModel';
import type { CompanyUserProfileTrainingModel } from './CompanyUserProfileTrainingModel';
import type { CompanyUserProfileTranslationModel } from './CompanyUserProfileTranslationModel';
import type { CompanyUserProfileWorkExperienceModel } from './CompanyUserProfileWorkExperienceModel';
import type { Link } from './Link';
export type CompanyUserProfileFullModel = {
    employers?: Array<CompanyUserProfileEmployerModel> | null;
    workExperience?: Array<CompanyUserProfileWorkExperienceModel> | null;
    education?: Array<CompanyUserProfileEducationModel> | null;
    training?: Array<CompanyUserProfileTrainingModel> | null;
    references?: Array<CompanyUserProfileReferenceModel> | null;
    skills?: Array<CompanyUserProfileSkillModel> | null;
    extSkills?: Array<CompanyUserProfileExtSkillModel> | null;
    commitments?: Array<CompanyUserProfileCommitmentModel> | null;
    languages?: Array<CompanyUserProfileLanguageModel> | null;
    userId?: string | null;
    id?: number | null;
    companyId?: number | null;
    companyUserId?: number | null;
    createdWhen?: string | null;
    updatedWhen?: string | null;
    publishedWhen?: string | null;
    presentation?: CompanyUserProfilePresentationModel | null;
    profileTranslationId?: number;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
    translations?: Array<CompanyUserProfileTranslationModel> | null;
    links?: Array<Link> | null;
};

