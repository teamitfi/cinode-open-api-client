/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyAddressModel } from './CompanyAddressModel';
import type { CompanyTagBaseModel } from './CompanyTagBaseModel';
import type { CompanyUserCandidateStatus } from './CompanyUserCandidateStatus';
import type { CompanyUserImageModel } from './CompanyUserImageModel';
import type { CompanyUserResumeBaseModel } from './CompanyUserResumeBaseModel';
import type { CompanyUserType } from './CompanyUserType';
import type { CurrencyModel } from './CurrencyModel';
import type { Link } from './Link';
import type { LocationModel } from './LocationModel';
export type CompanyUserCandidateModel = {
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    defaultCurrency?: CurrencyModel | null;
    createdDateTime?: string;
    phone?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    status?: CompanyUserCandidateStatus | null;
    email?: string | null;
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

