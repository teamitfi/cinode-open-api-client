/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBaseModel } from './CompanyBaseModel';
import type { CompanyCustomerBaseModel } from './CompanyCustomerBaseModel';
import type { CompanyCustomerContactBaseModel } from './CompanyCustomerContactBaseModel';
import type { CompanyTagBaseModel } from './CompanyTagBaseModel';
import type { CompanyUserBaseModel } from './CompanyUserBaseModel';
import type { CurrencyModel } from './CurrencyModel';
import type { Link } from './Link';
import type { ProjectAssignmentBaseModel } from './ProjectAssignmentBaseModel';
import type { ProjectAttachmentModel } from './ProjectAttachmentModel';
import type { ProjectEventBaseModel } from './ProjectEventBaseModel';
import type { ProjectPriority } from './ProjectPriority';
import type { ProjectReferenceModel } from './ProjectReferenceModel';
import type { ProjectState } from './ProjectState';
import type { ProjectStateHistoryModel } from './ProjectStateHistoryModel';
export type ProjectModel = {
    company?: CompanyBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    seoId?: string | null;
    locationId?: number | null;
    googleId?: string | null;
    probability?: number | null;
    estimatedValue?: number | null;
    contractValue?: number | null;
    estimatedCloseDate?: string | null;
    managers?: Array<CompanyUserBaseModel> | null;
    /**
     * @deprecated
     */
    salesManager?: CompanyUserBaseModel | null;
    salesManagers?: Array<CompanyUserBaseModel> | null;
    intermediator?: CompanyCustomerBaseModel | null;
    events?: Array<ProjectEventBaseModel> | null;
    customerContacts?: Array<CompanyCustomerContactBaseModel> | null;
    intermediatorContacts?: Array<CompanyCustomerContactBaseModel> | null;
    assignments?: Array<ProjectAssignmentBaseModel> | null;
    attachments?: Array<ProjectAttachmentModel> | null;
    tags?: Array<CompanyTagBaseModel> | null;
    pipelineId?: number | null;
    currentStageId?: number | null;
    currency?: CurrencyModel | null;
    projectReferences?: Array<ProjectReferenceModel> | null;
    /**
     * 0 = Open
     * 30 = Won
     * 40 = Lost
     * 50 = Abandoned
     * 60 = Suspended
     */
    currentState?: ProjectState;
    stateHistory?: Array<ProjectStateHistoryModel> | null;
    createdBy?: CompanyUserBaseModel | null;
    updatedBy?: CompanyUserBaseModel | null;
    createdDateTime?: string;
    updatedDateTime?: string | null;
    teamId?: number | null;
    stateReasonId?: number | null;
    /**
     * List of sales managers employee ids
     */
    salesManagerIds?: Array<number> | null;
    /**
     * List of project managers employee ids
     */
    projectManagerIds?: Array<number> | null;
    priority?: ProjectPriority;
    companyId?: number;
    customerId?: number;
    id?: number;
    title?: string | null;
    description?: string | null;
    identifier?: string | null;
    customerIdentifier?: string | null;
    links?: Array<Link> | null;
};

