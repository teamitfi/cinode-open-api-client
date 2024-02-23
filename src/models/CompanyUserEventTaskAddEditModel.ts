/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventStatusValue } from './EventStatusValue';
import type { EventTaskType } from './EventTaskType';
import type { EventType } from './EventType';
import type { EventVisibility } from './EventVisibility';
export type CompanyUserEventTaskAddEditModel = {
    companyUserId?: number;
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    /**
     * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};

