/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCandidateState } from './CompanyCandidateState';
import type { UserGender } from './UserGender';
export type CompanyCandidateAddModel = {
    firstName: string;
    lastName: string;
    gender?: UserGender;
    birthYear?: number | null;
    title?: string | null;
    description?: string | null;
    email?: string | null;
    phone?: string | null;
    linkedInUrl?: string | null;
    rating?: number | null;
    state: CompanyCandidateState;
    availableFromDate?: string | null;
    periodOfNoticeDays?: number | null;
    salaryRequirement?: number | null;
    isMobile?: boolean;
    recruitmentManagerId?: number | null;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    teamId?: number | null;
    companyAddressId?: number | null;
    recruitmentSourceId?: number | null;
    currentEmployer?: string | null;
    campaignCode?: string | null;
    currencyId?: number | null;
    offeredSalary?: number | null;
    notifyRecruitmentManager?: boolean;
};

