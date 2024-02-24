# cinode-open-api-client
A generated typescript client for the API of www.cinode.com, which creates multi usable target lib.

## Usage
```
// Create the client instance with server and authentication details
export class AppClient {
    readonly organizations: OrganizationsService;
    readonly teams: TeamsService;
    readonly request: BaseHttpRequest;

    constructor(openApiConfig?: OpenAPIConfig, HttpRequest: new (config: OpenAPIConfig) => BaseHttpRequest = XhrHttpRequest) {
        this.request = new HttpRequest({
            BASE: openApiConfig?.BASE ?? 'http://localhost:4000',
            VERSION: openApiConfig?.VERSION ?? 'x.x.x',
            WITH_CREDENTIALS: openApiConfig?.WITH_CREDENTIALS ?? false,
            TOKEN: openApiConfig?.TOKEN,
            USERNAME: openApiConfig?.USERNAME,
            PASSWORD: openApiConfig?.PASSWORD,
            HEADERS: openApiConfig?.HEADERS,
        });
        this.organizations = new OrganizationsService(this.request);
        this.teams = new TeamsService(this.request);
    }
}

const client = new AppClient({ BASE: 'http://some-server-host.com', TOKEN: '1234' });
const orgRes: OrganizationResponse = await client.organizations.createOrganization({
  name: 'MyTestOrg',
  description: 'My Test Org Description',
});



```

## Update the client
```
npm run update-client

```

## Generate the client
```
npm run generate-client

```

## Generate the Library
```
npm run build

```

## Local Development
```
npm run watch

```


# Thanks to:
https://github.com/ferdikoomen/openapi-typescript-codegen/wiki/Basic-usage
https://api.cinode.com/docs/index.html