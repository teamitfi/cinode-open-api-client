/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookConfigurationAddModel } from './WebhookConfigurationAddModel';
import type { WebhookCredentialsAddModel } from './WebhookCredentialsAddModel';
export type WebhookAddModel = {
    companyId?: number | null;
    isActive?: boolean;
    endpointUrl?: string | null;
    configurations?: Array<WebhookConfigurationAddModel> | null;
    credentials?: Array<WebhookCredentialsAddModel> | null;
};

