/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { Link } from './Link';
import type { TeamBaseModel } from './TeamBaseModel';
export type TeamMemberModel = {
    teamId?: number | null;
    companyUserId?: number | null;
    companyUser?: CompanyUserBaseModel | null;
    team?: TeamBaseModel | null;
    availabilityPercent?: number | null;
    links?: Array<Link> | null;
};

