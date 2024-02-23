/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanySize } from './CompanySize';
export type CompanyCustomerEditModel = {
    /**
     * @deprecated
     */
    readonly status?: boolean;
    name: string;
    description?: string | null;
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    identification?: string | null;
    email?: string | null;
    homepage?: string | null;
    phone?: string | null;
    fax?: string | null;
    intermediator?: boolean;
    size?: CompanySize | null;
};

