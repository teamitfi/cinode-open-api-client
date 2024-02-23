/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { UserGender } from './UserGender';
export type CompanyUserEditModel = {
    status?: CompanyUserStatus;
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    employmentNumber?: string | null;
    invoicingGoal?: number | null;
    mobility?: number | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    title?: string | null;
    email?: string | null;
    taxTable?: string | null;
    baseSalary?: number | null;
    provision?: number | null;
    hourlyTargetRate?: number | null;
    selfCost?: number | null;
    locationId?: number | null;
    defaultCurrencyId?: number | null;
    displayCurrencyId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: string | null;
    gender?: UserGender;
    companyCalendarId?: number | null;
    timezoneId?: string | null;
    phone?: string | null;
};

