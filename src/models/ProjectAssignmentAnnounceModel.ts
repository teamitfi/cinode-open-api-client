/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerRecipientBaseModel } from './PartnerRecipientBaseModel';
export type ProjectAssignmentAnnounceModel = {
    title: string;
    description?: string | null;
    deadline: string;
    price?: number | null;
    isPriceNegotiable?: boolean;
    currencyId?: number | null;
    managerCompanyUserId: number;
    attachmentIds?: Array<string> | null;
    partnerRecipients?: Array<PartnerRecipientBaseModel> | null;
    subcontractorIds?: Array<number> | null;
    announceToPartnerNetwork?: boolean | null;
    announceToMarket?: boolean | null;
    /**
     * @deprecated
     */
    isRemote?: boolean | null;
    /**
     * Accepts values between 0 and 100. 0 indicates that the work is to be done on site. 100 means that the position is fully remote.
     */
    remotePercentage?: number | null;
    isEndCustomerAssignment?: boolean | null;
    /**
     * Set to true if you actually want to publish the announcement to your recipients, if you are developing/testing the endpoint it should be false, then no persist will take place.
     */
    publishForReal?: boolean;
    referenceId?: string | null;
};

