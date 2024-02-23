/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeywordType } from './KeywordType';
export type KeywordModel = {
    id?: number | null;
    /**
     * Uncategorized = 0,
     * Industries = 1
     * Roles = 2
     * Tools = 3
     * Techniques = 4
     * MethodsProcesses = 5
     * Platforms = 6
     * Products = 7
     * Certifications = 10
     * Materials = 11
     * SpecificationsRegulations = 12
     * Hardware = 13
     * OperationalAreaAndFunction = 14
     * Construction = 15
     * ReportsInvestigations = 16
     * SpecialitiesMedicine = 17
     * StandardsRegulations = 18
     * Accreditation = 19
     */
    type?: KeywordType;
    masterSynonymId?: number | null;
    masterSynonym?: string | null;
    synonyms?: Array<string> | null;
    universal?: boolean;
    verified?: boolean;
};

