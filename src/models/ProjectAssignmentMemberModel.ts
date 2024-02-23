/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserStatus } from './CompanyUserStatus';
import type { CompanyUserType } from './CompanyUserType';
import type { Link } from './Link';
import type { ProjectAssignmentMemberState } from './ProjectAssignmentMemberState';
export type ProjectAssignmentMemberModel = {
    companyUserId?: number | null;
    companyId?: number | null;
    id?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    companyUserType?: CompanyUserType | null;
    /**
     * Obsolete
     */
    status?: CompanyUserStatus | null;
    projectAssignmentMemberId?: number;
    projectAssignmentMemberState?: ProjectAssignmentMemberState | null;
    links?: Array<Link> | null;
};

