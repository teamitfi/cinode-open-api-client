/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileEducationTranslationModel } from './CompanyUserProfileEducationTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileEducationModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    locationId?: number | null;
    translations?: Array<CompanyUserProfileEducationTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

