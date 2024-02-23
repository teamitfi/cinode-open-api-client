/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyUserInfoBlockViewModel } from './CompanyUserInfoBlockViewModel';
import type { IContactInfoViewModel } from './IContactInfoViewModel';
import type { IDynamicBlockViewModel } from './IDynamicBlockViewModel';
import type { ImageSize } from './ImageSize';
import type { ITemplateCompany } from './ITemplateCompany';
import type { ITemplateLogotype } from './ITemplateLogotype';
import type { ITemplateProfileImage } from './ITemplateProfileImage';
import type { ITemplateSharedAssetViewModel } from './ITemplateSharedAssetViewModel';
import type { ITemplateStyleAssetViewModel } from './ITemplateStyleAssetViewModel';
import type { ITemplateUserInfo } from './ITemplateUserInfo';
import type { PdfEngineType } from './PdfEngineType';
import type { PdfOrientation } from './PdfOrientation';
import type { TemplateAssetType } from './TemplateAssetType';
import type { WordEngineType } from './WordEngineType';
export type DynamicTemplateViewModel = {
    blocks?: Array<IDynamicBlockViewModel> | null;
    logotype?: ITemplateLogotype | null;
    id?: number;
    resumeTemplateId?: number;
    companyId?: number;
    companyUserId?: number;
    slug?: string | null;
    title: string;
    description?: string | null;
    logotypeId?: number | null;
    wordEnabled?: boolean;
    profileImageSize?: ImageSize;
    allowNoProfileImage?: boolean;
    hideProfileImageInEdit?: boolean;
    companyLogotypeImageSize?: ImageSize;
    pdfEngineType?: PdfEngineType;
    wordEngineType?: WordEngineType;
    pdfOrientation?: PdfOrientation;
    pdfMarginTop?: number;
    pdfMarginRight?: number;
    pdfMarginBottom?: number;
    pdfMarginLeft?: number;
    customFooterForWkhtml?: boolean;
    pdfFooter?: boolean;
    showPreviewToggle?: boolean;
    contactInfoId?: number | null;
    contactInfo?: IContactInfoViewModel | null;
    userInfo?: ITemplateUserInfo | null;
    companyUserInfo?: CompanyUserInfoBlockViewModel | null;
    profileImage?: ITemplateProfileImage | null;
    company?: ITemplateCompany | null;
    created?: string;
    updated?: string | null;
    languageBranchId?: number | null;
    isPublic?: boolean;
    locked?: boolean;
    currentLanguage?: string | null;
    styleAssets?: Array<ITemplateStyleAssetViewModel> | null;
    customerManagedStyleAsset?: ITemplateStyleAssetViewModel | null;
    sharedStyleAssets?: Array<ITemplateSharedAssetViewModel> | null;
    sharedScriptAssets?: Array<ITemplateSharedAssetViewModel> | null;
    sharedFontAssets?: Array<ITemplateSharedAssetViewModel> | null;
    primaryStyleAssets?: {
        None?: Array<ITemplateSharedAssetViewModel>;
        Primary?: Array<ITemplateSharedAssetViewModel>;
        Classic?: Array<ITemplateSharedAssetViewModel>;
        Dynamic?: Array<ITemplateSharedAssetViewModel>;
        PageFlow?: Array<ITemplateSharedAssetViewModel>;
        BlockWorkExperience?: Array<ITemplateSharedAssetViewModel>;
        BlockSkillsByLevel?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium3PageFlow?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium2PageFlow?: Array<ITemplateSharedAssetViewModel>;
        TemplateType?: Array<ITemplateSharedAssetViewModel>;
    } | null;
    primaryScriptAssets?: {
        None?: Array<ITemplateSharedAssetViewModel>;
        Primary?: Array<ITemplateSharedAssetViewModel>;
        Classic?: Array<ITemplateSharedAssetViewModel>;
        Dynamic?: Array<ITemplateSharedAssetViewModel>;
        PageFlow?: Array<ITemplateSharedAssetViewModel>;
        BlockWorkExperience?: Array<ITemplateSharedAssetViewModel>;
        BlockSkillsByLevel?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium3PageFlow?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium2PageFlow?: Array<ITemplateSharedAssetViewModel>;
        TemplateType?: Array<ITemplateSharedAssetViewModel>;
    } | null;
    templateAssetTypes?: Array<TemplateAssetType> | null;
    isAnsweringToRequest?: boolean;
};

