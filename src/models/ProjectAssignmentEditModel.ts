/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractType } from './ContractType';
import type { ExtentType } from './ExtentType';
export type ProjectAssignmentEditModel = {
    projectAssignmentId: number;
    title: string;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    rate?: number | null;
    extent?: number | null;
    oralAgreementToDate?: string | null;
    optionToDate?: string | null;
    contractType?: ContractType;
    extentType?: ExtentType;
    currencyId?: number | null;
};

