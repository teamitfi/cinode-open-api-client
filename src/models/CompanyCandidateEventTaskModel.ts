/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventCommentModel } from './EventCommentModel';
import type { EventStatusValue } from './EventStatusValue';
import type { EventTaskType } from './EventTaskType';
import type { EventType } from './EventType';
import type { EventVisibility } from './EventVisibility';
import type { Link } from './Link';
export type CompanyCandidateEventTaskModel = {
    companyCandidateId?: number;
    /**
     * NotSpecified = 0
     * Phone = 1
     * Email = 2
     */
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
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

