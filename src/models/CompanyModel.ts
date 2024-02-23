/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyAddressModel } from './CompanyAddressModel';
import type { CompanyTagBaseModel } from './CompanyTagBaseModel';
import type { CurrencyModel } from './CurrencyModel';
import type { Link } from './Link';
export type CompanyModel = {
    /**
     * External identifier
     */
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    registrationYear?: number | null;
    isTaxRegistered?: boolean | null;
    addresses?: Array<CompanyAddressModel> | null;
    tags?: Array<CompanyTagBaseModel> | null;
    countryId?: number | null;
    defaultCurrency?: CurrencyModel | null;
    currencies?: Array<CurrencyModel> | null;
    id?: number | null;
    name?: string | null;
    seoId?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};

