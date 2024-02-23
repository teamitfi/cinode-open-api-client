/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaveToApiOption } from './SaveToApiOption';
import type { TrainingType } from './TrainingType';
export type CompanyUserProfileTrainingAddEditModel = {
    title?: string | null;
    year?: number;
    issuer?: string | null;
    supplier?: string | null;
    code?: string | null;
    description?: string | null;
    trainingType?: TrainingType;
    url?: string | null;
    expireDate?: string | null;
    saveTo?: SaveToApiOption;
};

