/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { PartnerConnectionBaseModel } from './PartnerConnectionBaseModel';
export type PartnerBaseModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    partnerConnection?: PartnerConnectionBaseModel | null;
    companyUserManager?: CompanyUserBaseModel | null;
    hasTrusts?: boolean;
    isEnabled?: boolean;
};

