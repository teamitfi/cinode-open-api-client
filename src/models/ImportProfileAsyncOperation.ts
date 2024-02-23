/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserProfileBaseModel } from './CompanyUserProfileBaseModel';
import type { LongRunningStatus } from './LongRunningStatus';
export type ImportProfileAsyncOperation = {
    profile?: CompanyUserProfileBaseModel | null;
    readonly operationId?: number;
    readonly status?: LongRunningStatus;
    readonly errors?: Array<string> | null;
};

