/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentType } from './AttachmentType';
import type { Link } from './Link';
export type CompanyCandidateUriAttachmentModel = {
    uri?: string | null;
    id?: string;
    attachmentType?: AttachmentType;
    companyId?: number;
    companyCandidateId?: number;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};

