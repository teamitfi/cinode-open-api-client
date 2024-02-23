/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookConfigurationModel } from './WebhookConfigurationModel';
import type { WebhookCredentialsModel } from './WebhookCredentialsModel';
export type WebhookModel = {
    id?: string;
    isActive?: boolean;
    endpointUrl?: string | null;
    configurations?: Array<WebhookConfigurationModel> | null;
    credentials?: Array<WebhookCredentialsModel> | null;
};

