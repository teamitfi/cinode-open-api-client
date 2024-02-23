/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyModel } from './CurrencyModel';
import type { ProjectAssignmentBaseModel } from './ProjectAssignmentBaseModel';
import type { ProjectAssignmentMemberStateHistoryModel } from './ProjectAssignmentMemberStateHistoryModel';
export type CompanyUserSubcontractorRoleMemberModel = {
    projectAssignmentId?: number;
    assignmentTariff?: number | null;
    currency?: CurrencyModel | null;
    currentState?: ProjectAssignmentMemberStateHistoryModel | null;
    projectAssignment?: ProjectAssignmentBaseModel | null;
};

