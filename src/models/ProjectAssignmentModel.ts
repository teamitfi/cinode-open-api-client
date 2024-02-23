/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBaseModel } from './CompanyBaseModel';
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { ContractType } from './ContractType';
import type { CurrencyModel } from './CurrencyModel';
import type { ExtentType } from './ExtentType';
import type { Link } from './Link';
import type { ProjectAssignmentMemberModel } from './ProjectAssignmentMemberModel';
import type { ProjectAssignmentSkillBaseModel } from './ProjectAssignmentSkillBaseModel';
import type { ProjectBaseModel } from './ProjectBaseModel';
export type ProjectAssignmentModel = {
    company?: CompanyBaseModel | null;
    assigned?: ProjectAssignmentMemberModel | null;
    prospects?: Array<ProjectAssignmentMemberModel> | null;
    seoId?: string | null;
    skills?: Array<ProjectAssignmentSkillBaseModel> | null;
    projectAssignmentMemberId?: number | null;
    rate?: number | null;
    oralAgreementToDate?: string | null;
    optionToDate?: string | null;
    contractType?: ContractType;
    readonly isAssigned?: boolean;
    currency?: CurrencyModel | null;
    companyId?: number;
    customerId?: number;
    projectId?: number;
    project?: ProjectBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    id?: number;
    title?: string | null;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    extentType?: ExtentType;
    extent?: number | null;
    links?: Array<Link> | null;
};

