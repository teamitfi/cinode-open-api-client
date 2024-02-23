/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserGender } from './UserGender';
export type CompanyUserSubcontractorAddEditModel = {
    firstName: string;
    lastName: string;
    email: string;
    title?: string | null;
    password: string;
    passwordConfirm: string;
    gender: UserGender;
    profileLanguageId?: number | null;
    createProfile?: boolean;
    tariff?: number | null;
    phone?: string | null;
    currencyId?: number | null;
    languageId: number;
    companyCalendarId?: number | null;
    companyAddressId?: number | null;
    companyName?: string | null;
    companyIdentifier?: string | null;
    internalIdentifier?: string | null;
    linkedIn?: string | null;
    rating?: number | null;
};

