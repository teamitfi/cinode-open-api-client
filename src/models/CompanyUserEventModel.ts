/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventCommentModel } from './EventCommentModel';
import type { EventType } from './EventType';
import type { EventVisibility } from './EventVisibility';
import type { Link } from './Link';
export type CompanyUserEventModel = {
    companyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};

