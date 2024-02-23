/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type CompanyCandidateBaseModel = {
    id?: number;
    companyId?: number;
    seoId?: string | null;
    /**
     * @deprecated
     */
    readonly firstname?: string | null;
    firstName?: string | null;
    /**
     * @deprecated
     */
    readonly lastname?: string | null;
    lastName?: string | null;
    createdDateTime?: string;
    lastTouchDateTime?: string | null;
    updatedDateTime?: string | null;
    links?: Array<Link> | null;
};

