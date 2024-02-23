/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationModel } from './LocationModel';
import type { SaveToApiOption } from './SaveToApiOption';
export type CompanyUserProfileEducationAddEditModel = {
    schoolName: string;
    programName: string;
    degree?: string | null;
    description?: string | null;
    location?: LocationModel | null;
    isCurrent?: boolean | null;
    startDate?: string | null;
    endDate?: string | null;
    url?: string | null;
    saveTo?: SaveToApiOption;
};

