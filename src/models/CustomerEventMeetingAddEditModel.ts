/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventStatusValue } from './EventStatusValue';
import type { EventType } from './EventType';
import type { EventVisibility } from './EventVisibility';
export type CustomerEventMeetingAddEditModel = {
    customerContactId?: number | null;
    startDateTime?: string;
    endDateTime?: string;
    /**
     * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
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

