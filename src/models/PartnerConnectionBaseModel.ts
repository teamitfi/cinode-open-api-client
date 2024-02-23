/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBaseModel } from './CompanyBaseModel';
import type { PartnerConnectionTrustType } from './PartnerConnectionTrustType';
export type PartnerConnectionBaseModel = {
    companyId?: number;
    company?: CompanyBaseModel | null;
    partnerId?: number;
    connectedPartnerConnectionId?: number | null;
    partnerCompanyId?: number;
    partnerCompany?: CompanyBaseModel | null;
    grantedTrusts?: Array<PartnerConnectionTrustType> | null;
    receivedTrusts?: Array<PartnerConnectionTrustType> | null;
};

