/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyAddressModel } from './CompanyAddressModel';
import type { CompanyUserImageModel } from './CompanyUserImageModel';
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { CompanyUserType } from './CompanyUserType';
import type { Link } from './Link';
import type { LocationModel } from './LocationModel';
export type CompanyUserExtendedModel = {
    /**
     * Disconnected = 0,
     * PreActive = 2,
     * Active = 3,
     */
    status?: CompanyUserStatus | null;
    title?: string | null;
    companyUserEmail?: string | null;
    createdDateTime?: string | null;
    updatedDateTime?: string | null;
    employmentNumber?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};

