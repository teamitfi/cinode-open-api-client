/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { UserGender } from './UserGender';
export type ICompanyUserEmployeePatchDocument = {
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
    firstname?: string | null;
    lastname?: string | null;
    dateOfBirth?: string | null;
    gender?: UserGender;
    companyCalendarId?: number | null;
    timezoneId?: string | null;
    phone?: string | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
};

