/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateAttachmentModel } from './CompanyCandidateAttachmentModel';
import type { CompanyCandidateState } from './CompanyCandidateState';
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { Link } from './Link';
import type { UserGender } from './UserGender';
export type CompanyCandidateExtendedModel = {
    rating?: number | null;
    availableFromDate?: string | null;
    periodOfNoticeDays?: number | null;
    salaryRequirement?: number | null;
    offeredSalary?: number | null;
    state?: CompanyCandidateState | null;
    currencyId?: number | null;
    isMobile?: boolean;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    recruitmentManagerId?: number | null;
    campaignCode?: string | null;
    /**
     * Other = 0,
     * Male = 1,
     * Female = 2
     */
    gender?: UserGender;
    birthYear?: number | null;
    title?: string | null;
    description?: string | null;
    email?: string | null;
    linkedInUrl?: string | null;
    phone?: string | null;
    attachments?: Array<CompanyCandidateAttachmentModel> | null;
    recruitmentManager?: CompanyUserBaseModel | null;
    currentEmployer?: string | null;
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

