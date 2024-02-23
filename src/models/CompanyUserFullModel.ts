/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsencePeriodModel } from './AbsencePeriodModel';
import type { CompanyAddressModel } from './CompanyAddressModel';
import type { CompanyCustomerManagerModel } from './CompanyCustomerManagerModel';
import type { CompanyTagModel } from './CompanyTagModel';
import type { CompanyUserImageModel } from './CompanyUserImageModel';
import type { CompanyUserResumeBaseModel } from './CompanyUserResumeBaseModel';
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { CompanyUserType } from './CompanyUserType';
import type { CurrencyModel } from './CurrencyModel';
import type { Link } from './Link';
import type { LocationModel } from './LocationModel';
import type { RoleModel } from './RoleModel';
import type { TeamManagerModel } from './TeamManagerModel';
import type { TeamMemberModel } from './TeamMemberModel';
export type CompanyUserFullModel = {
    invoicingGoal?: number | null;
    taxTable?: string | null;
    baseSalary?: number | null;
    provision?: number | null;
    hourlyTargetRate?: number | null;
    selfCost?: number | null;
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    mobility?: number | null;
    locationName?: string | null;
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    roles?: Array<RoleModel> | null;
    teamManagers?: Array<TeamManagerModel> | null;
    teamMembers?: Array<TeamMemberModel> | null;
    customerManagers?: Array<CompanyCustomerManagerModel> | null;
    periods?: Array<AbsencePeriodModel> | null;
    defaultCurrency?: CurrencyModel | null;
    phone?: string | null;
    dateOfBirth?: string | null;
    tags?: Array<CompanyTagModel> | null;
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

