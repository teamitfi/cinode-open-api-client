/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileCommitmentTranslationModel } from './CompanyUserProfileCommitmentTranslationModel';
import type { Link } from './Link';
export type CompanyUserProfileCommitmentModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    translations?: Array<CompanyUserProfileCommitmentTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

