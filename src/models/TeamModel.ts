/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type TeamModel = {
    internalIdentification?: string | null;
    corporateIdentityNumber?: string | null;
    costCenter?: string | null;
    location?: string | null;
    parentTeamId?: number | null;
    created?: string | null;
    updated?: string | null;
    locationId?: number | null;
    id?: number;
    companyId?: number | null;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};

