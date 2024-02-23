/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { UserGender } from './UserGender';
export type CompanyUserAddModel = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    gender: UserGender;
    status?: CompanyUserStatus;
    teamId?: number | null;
    title?: string | null;
    languageId?: number | null;
    employmentNumber?: string | null;
    employmentStartDate?: string | null;
    addProfile?: boolean;
    locationId?: number | null;
    defaultCurrencyId?: number | null;
    displayCurrencyId?: number | null;
    mustChangePassword?: boolean;
};

