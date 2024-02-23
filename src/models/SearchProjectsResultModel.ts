/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectBaseModel } from './ProjectBaseModel';
import type { ProjectQuerySortPageAndSortByModel } from './ProjectQuerySortPageAndSortByModel';
export type SearchProjectsResultModel = {
    pagedAndSortedBy?: ProjectQuerySortPageAndSortByModel | null;
    result?: Array<ProjectBaseModel> | null;
    hits?: number;
    totalItems?: number;
};

