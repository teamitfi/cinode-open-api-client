/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressType } from './AddressType';
import type { Link } from './Link';
export type CompanyCustomerAddressModel = {
    companyCustomerId?: number | null;
    companyId?: number | null;
    id?: number | null;
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    email?: string | null;
    /**
     * Undefined = 0,
     * StreetAddress = 1 (VisitingAddress)
     * InvoiceAddress = 2,
     * LocationAddress = 3 (Used to connect an Employee to an office registered in Cinode)
     */
    addressType?: AddressType;
    comments?: string | null;
    links?: Array<Link> | null;
};

