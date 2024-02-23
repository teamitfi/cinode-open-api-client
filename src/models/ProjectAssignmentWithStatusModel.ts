/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentExtentType } from './ProjectAssignmentExtentType';
import type { ProjectAssignmentMemberAllocationStatus } from './ProjectAssignmentMemberAllocationStatus';
import type { ProjectAssignmentMemberModel } from './ProjectAssignmentMemberModel';
import type { ProjectAssignmentMemberType } from './ProjectAssignmentMemberType';
import type { ProjectState } from './ProjectState';
export type ProjectAssignmentWithStatusModel = {
    pipelineId?: number | null;
    projectPipelineStageTitle?: string | null;
    customerId?: number;
    projectId?: number;
    /**
     * 0 - Open
     * 30 - Won
     * 40 - Lost
     * 50 - Abandoned
     * 60 - Suspended
     */
    projectState?: ProjectState;
    probability?: number;
    /**
     * Unspecified = 0,
     * Coming = 1,
     * Ongoing = 2,
     * Ended = 3
     */
    projectAssignmentId?: number;
    /**
     * None = 0,
     * Preliminary = 1,
     * Assigned = 2,
     */
    projectAssignmentAllocationStatus?: ProjectAssignmentMemberAllocationStatus;
    /**
     * Unspecified = 0,
     * Employee = 1,
     * Partner Consultant = 2,
     * Subcontractor = 3
     */
    projectAssignmentMemberType?: ProjectAssignmentMemberType;
    startDate?: string | null;
    endDate?: string | null;
    optionToDate?: string | null;
    oralAgreementToDate?: string | null;
    projectAssignmentExtent?: number;
    /**
     * Percent = 0,
     * Hours = 1,
     */
    projectAssignmentExtentType?: ProjectAssignmentExtentType;
    rate?: number | null;
    estimatedCloseDate?: string | null;
    estimatedValue?: number | null;
    assigned?: ProjectAssignmentMemberModel | null;
    prospects?: Array<ProjectAssignmentMemberModel> | null;
};

