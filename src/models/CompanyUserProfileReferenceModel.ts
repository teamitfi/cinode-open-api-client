/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileReferenceTranslationModel } from './CompanyUserProfileReferenceTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileReferenceModel = {
    profileId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    telephone?: string | null;
    profileWorkExperienceId?: number | null;
    translations?: Array<CompanyUserProfileReferenceTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

