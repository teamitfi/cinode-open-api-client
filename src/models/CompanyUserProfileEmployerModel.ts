/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileEmployerTranslationModel } from './CompanyUserProfileEmployerTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileEmployerModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    isCurrent?: boolean;
    translations?: Array<CompanyUserProfileEmployerTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

