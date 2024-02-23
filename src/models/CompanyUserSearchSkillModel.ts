/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanySubcontractorGroupBaseModel } from './CompanySubcontractorGroupBaseModel';
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { CompanyUserType } from './CompanyUserType';
import type { SkillResultModel } from './SkillResultModel';
import type { TeamBaseModel } from './TeamBaseModel';
export type CompanyUserSearchSkillModel = {
    companyId?: number;
    companyUserId?: number | null;
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
    title?: string | null;
    seoId?: string | null;
    addressId?: number | null;
    addressDisplayName?: string | null;
    teams?: Array<TeamBaseModel> | null;
    skills?: Array<SkillResultModel> | null;
    status?: CompanyUserStatus | null;
    companyCandidateId?: number | null;
    groups?: Array<CompanySubcontractorGroupBaseModel> | null;
    companyUserType?: CompanyUserType;
};

