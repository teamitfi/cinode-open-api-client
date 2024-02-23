/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageBlockModel } from './ImageBlockModel';
import type { LocationBlockModel } from './LocationBlockModel';
import type { SkillBlockItemModel } from './SkillBlockItemModel';
export type WorkExperienceBlockItemModel = {
    skills?: Array<SkillBlockItemModel> | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    employer?: string | null;
    location?: LocationBlockModel | null;
    startDate?: string;
    endDate?: string | null;
    url?: string | null;
    logotype?: ImageBlockModel | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};

