/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectQuerySortPageAndSortByModel } from './ProjectQuerySortPageAndSortByModel';
import type { ProjectState } from './ProjectState';
export type SearchProjectQueryModel = {
    title?: string | null;
    identification?: string | null;
    customerIdentifier?: string | null;
    corporateIdentityNumber?: string | null;
    customerId?: number | null;
    pageAndSortBy?: ProjectQuerySortPageAndSortByModel | null;
    /**
     * Your Project Pipelines can be retrieved from the GET ProjectPipelines endpoint
     */
    pipelines?: Array<number> | null;
    salesManagers?: Array<number> | null;
    customers?: Array<number> | null;
    intermediators?: Array<number> | null;
    /**
     * Open = 0,
     * Won = 30,
     * Lost = 40,
     * Abandoned = 50,
     * Suspended = 60
     */
    projectStates?: Array<ProjectState> | null;
};

