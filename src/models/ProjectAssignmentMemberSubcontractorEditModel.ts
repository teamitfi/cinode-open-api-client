/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentAllocationStatus } from './ProjectAssignmentAllocationStatus';
import type { ProjectAssignmentMemberState } from './ProjectAssignmentMemberState';
export type ProjectAssignmentMemberSubcontractorEditModel = {
    groupId?: number | null;
    currencyId?: number | null;
    tariff?: number | null;
    id: number;
    state: ProjectAssignmentMemberState;
    companyUserId: number;
    status: ProjectAssignmentAllocationStatus;
};

