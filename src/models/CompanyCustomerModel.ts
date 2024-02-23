/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCustomerAddressModel } from './CompanyCustomerAddressModel';
import type { CompanyCustomerAttachmentModel } from './CompanyCustomerAttachmentModel';
import type { CompanyCustomerContactBaseModel } from './CompanyCustomerContactBaseModel';
import type { CompanyCustomerManagerModel } from './CompanyCustomerManagerModel';
import type { CompanySize } from './CompanySize';
import type { CompanyTagBaseModel } from './CompanyTagBaseModel';
import type { CountryModel } from './CountryModel';
import type { CurrencyModel } from './CurrencyModel';
import type { Link } from './Link';
import type { ProjectBaseModel } from './ProjectBaseModel';
import type { Status } from './Status';
export type CompanyCustomerModel = {
    phone?: string | null;
    fax?: string | null;
    homepage?: string | null;
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    contacts?: Array<CompanyCustomerContactBaseModel> | null;
    addresses?: Array<CompanyCustomerAddressModel> | null;
    projects?: Array<ProjectBaseModel> | null;
    intermediator?: boolean | null;
    attachments?: Array<CompanyCustomerAttachmentModel> | null;
    size?: CompanySize | null;
    countryId?: number | null;
    country?: CountryModel | null;
    turnOver?: number | null;
    turnOverCurrencyId?: number | null;
    turnOverCurrency?: CurrencyModel | null;
    email?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    managers?: Array<CompanyCustomerManagerModel> | null;
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    identification?: string | null;
    seoId?: string | null;
    /**
     * @deprecated
     */
    status?: Status;
    links?: Array<Link> | null;
};

