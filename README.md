# Overview

This module is a wrapper for [swagger-client](https://www.npmjs.com/package/swagger-client) that simplifies the process
of making calls to the SmartCLIDE DB API, given its swagger description and a Keycloak Bearer Authorization Token.

The current version provides:

- _call_ method that takes an object with the request configuration and returns the response from the API. The
configuration object has the following properties:

| Property | Description | Required for |
|--------------|-------------------------|-------------|
| _operationId_ | ID of the operation according to the swagger description | All requests |
| _parameters_ | Object containing the parameters required by the request (e.g., ```{ userId: "<userId>" }``` to send the userId to the /{userId} endpoint) | When demanded by the request |
| _requestBody_ | Object containing the data to be sent to the API, in the request body (e.g., ```{ id: "<id>", email: "<email>", team_id: "<team_id>" }``` to send the details of the user to be created/updated) | POST, PUT and DELETE requests |
| _token_ | Keycloak Bearer Authorization Token | All requests that require authentication |

# How to use?

## Add as a dependency to the package.json

```json
{
  "dependencies": {
    "@unparallel/smartclide-backend-connector": "latest"
  }
}
```

## Install dependencies

```shell
npm install
```

## Usage Example

```javascript
// Import the module
import SmartCLIDEBackendConnector from "@unparallel/smartclide-backend-connector";

// Instantiate the connector providing the URL of the swagger description of the API
let connector = await new SmartCLIDEBackendConnector("<swaggerURL>");

// Create a configuration object with the required properties
let configuration = {
    operationId: "<operationId>",
    parameters: { userId: "<userId>" },
    requestBody: {
        id: "<id>",
        email: "<email>",
        team_id: "<team_id>"
    },
    token: "<Keycloak Token>"
}

// Make the request
let result = await connector.call(configuration);

// Log the response
console.log(result);
```

# License
[MIT](https://choosealicense.com/licenses/mit/)
