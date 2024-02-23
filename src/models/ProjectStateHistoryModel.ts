/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectState } from './ProjectState';
import type { ProjectStateReasonModel } from './ProjectStateReasonModel';
export type ProjectStateHistoryModel = {
    state?: ProjectState;
    updated?: string;
    reason?: ProjectStateReasonModel | null;
};

