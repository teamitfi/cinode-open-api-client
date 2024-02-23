/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileTrainingTranslationModel } from './CompanyUserProfileTrainingTranslationModel';
import type { Link } from './Link';
import type { TrainingType } from './TrainingType';
export type CompanyUserProfileTrainingModel = {
    profileId?: number | null;
    id?: number | null;
    trainingType?: TrainingType | null;
    year?: number | null;
    code?: string | null;
    translations?: Array<CompanyUserProfileTrainingTranslationModel> | null;
    expireDate?: string | null;
    companyId?: number | null;
    companyUserId?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};

