/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationModel } from './LocationModel';
import type { ProjectPriority } from './ProjectPriority';
import type { ProjectState } from './ProjectState';
export type ProjectAddEditModel = {
    title: string;
    customerId: number;
    description?: string | null;
    identifier?: string | null;
    customerIdentifier?: string | null;
    intermediatorId?: number | null;
    estimatedCloseDate?: string | null;
    estimatedValue?: number | null;
    contractValue?: number | null;
    probability?: number | null;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    currencyId?: number | null;
    projectState?: ProjectState;
    location?: LocationModel | null;
    teamId?: number | null;
    stateReasonId?: number | null;
    priority?: ProjectPriority;
    /**
     * List of sales managers employee ids
     */
    salesManagerIds?: Array<number> | null;
    /**
     * List of project managers employee ids
     */
    projectManagerIds?: Array<number> | null;
};

