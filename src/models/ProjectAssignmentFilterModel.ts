/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAssignmentAllocationStatus } from './ProjectAssignmentAllocationStatus';
import type { ProjectAssignmentMemberType } from './ProjectAssignmentMemberType';
import type { ProjectAssignmentStatus } from './ProjectAssignmentStatus';
import type { ProjectState } from './ProjectState';
export type ProjectAssignmentFilterModel = {
    /**
     * Pipeline Ids can be retrieved from the Project Pipelines endpoint
     */
    pipelines?: Array<number> | null;
    /**
     * 0 - Employee
     * 1 - Partner consultant
     * 2- Subcontractor
     */
    projectAssignmentMemberTypes?: Array<ProjectAssignmentMemberType> | null;
    /**
     * 1 - Upcoming
     * 2 - Ongoing
     */
    projectAssignmentStatuses?: Array<ProjectAssignmentStatus> | null;
    /**
     * Team Id of Employee assigned to Role
     */
    teams?: Array<number> | null;
    /**
     * 0 - Open
     * 30 - Won
     * 40 - Lost
     * 50 - Abandoned
     * 60 - Suspended
     */
    projectStates?: Array<ProjectState> | null;
    projectAssignmentAllocationStatuses?: Array<ProjectAssignmentAllocationStatus> | null;
};

