/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ErrorModel = {
    /**
     * CorrelationId
     */
    correlationId?: string | null;
    /**
     * Severity of error
     */
    status?: string | null;
    /**
     * Error description in plain text
     */
    description?: string | null;
    /**
     * Cinode specific error code
     */
    code?: number | null;
    /**
     * Url to help page containing more information
     */
    moreInfo?: string | null;
};

