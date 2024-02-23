/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfilePresentationModel } from './CompanyUserProfilePresentationModel';
import type { CompanyUserProfileTranslationModel } from './CompanyUserProfileTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileBaseModel = {
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

