/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventNoteType } from './EventNoteType';
import type { EventType } from './EventType';
import type { EventVisibility } from './EventVisibility';
export type ProjectEventNoteAddEditModel = {
    customerId?: number;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    /**
     * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};

