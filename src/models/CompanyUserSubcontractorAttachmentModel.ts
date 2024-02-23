/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentType } from './AttachmentType';
import type { Link } from './Link';
export type CompanyUserSubcontractorAttachmentModel = {
    companyUserId?: number;
    attachmentType?: AttachmentType;
    companyId?: number | null;
    id?: string | null;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};

