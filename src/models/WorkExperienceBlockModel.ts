/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkExperienceBlockItemModel } from './WorkExperienceBlockItemModel';
export type WorkExperienceBlockModel = {
    /**
     * @deprecated
     */
    readonly skillsHeading?: string | null;
    subHeading?: string | null;
    hideSubHeading?: boolean;
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    useLogotype?: boolean;
    useAdvancedFormatting?: boolean;
    editorSettings?: string | null;
    data?: Array<WorkExperienceBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};

