/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsenceTypeDto } from './AbsenceTypeDto';
import type { Link } from './Link';
export type AbsencePeriodDtoModel = {
    id?: number;
    absenceType?: AbsenceTypeDto | null;
    startDate?: string;
    endDate?: string;
    extentPercentage?: number;
    companyUserId?: number;
    companyUserSeoId?: string | null;
    companyId?: number;
    companySeoId?: string | null;
    links?: Array<Link> | null;
};

