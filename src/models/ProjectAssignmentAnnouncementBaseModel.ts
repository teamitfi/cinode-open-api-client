/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractType } from './ContractType';
import type { ProjectAssignmentRequestStatus } from './ProjectAssignmentRequestStatus';
export type ProjectAssignmentAnnouncementBaseModel = {
    requestId?: number;
    title?: string | null;
    projectId?: number;
    companyId?: number;
    projectAssignmentId?: number;
    createdDateTime?: string;
    deadline?: string;
    price?: number | null;
    readonly contractType?: ContractType;
    description?: string | null;
    descriptionHtml?: string | null;
    currencyCode?: string | null;
    currencyId?: number | null;
    status?: ProjectAssignmentRequestStatus;
    statusText?: string | null;
    isAnnouncedToPartnerNetwork?: boolean | null;
    isPriceNegotiable?: boolean;
    /**
     * @deprecated
     */
    isRemote?: boolean | null;
    /**
     * 0 indicates that the work is to be done on site. 100 means that the position is fully remote.
     */
    remotePercentage?: number | null;
    isAnnouncedToMarket?: boolean | null;
    isEndCustomerAssignment?: boolean | null;
    referenceId?: string | null;
};

