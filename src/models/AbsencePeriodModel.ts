/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbscencePeriodDayModel } from './AbscencePeriodDayModel';
export type AbsencePeriodModel = {
    companyId?: number;
    companyUserId?: number;
    absenceTypeId?: number;
    absenceTypeName?: string | null;
    id?: number;
    days?: Array<AbscencePeriodDayModel> | null;
    extentPercentage?: number;
};

