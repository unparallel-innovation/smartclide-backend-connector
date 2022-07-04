# SmartClideDbApi.DeploymentPlatformApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeploymentPlatformItem**](DeploymentPlatformApi.md#deleteDeploymentPlatformItem) | **DELETE** /deployment_platforms/{deploymentPlatformId} | Deletes an DeploymentPlatform document
[**getDeploymentPlatform**](DeploymentPlatformApi.md#getDeploymentPlatform) | **GET** /deployment_platforms/{deploymentPlatformId} | Retrieves a DeploymentPlatform document
[**getDeploymentPlatforms**](DeploymentPlatformApi.md#getDeploymentPlatforms) | **GET** /deployment_platforms | Retrieves one or more DeploymentPlatform documents
[**patchDeploymentPlatformItem**](DeploymentPlatformApi.md#patchDeploymentPlatformItem) | **PUT** /deployment_platforms/{deploymentPlatformId} | Updates a DeploymentPlatform document
[**postDeploymentPlatforms**](DeploymentPlatformApi.md#postDeploymentPlatforms) | **POST** /deployment_platforms | Creates one or more DeploymentPlatform documents

<a name="deleteDeploymentPlatformItem"></a>
# **deleteDeploymentPlatformItem**
> deleteDeploymentPlatformItem(deploymentPlatformId)

Deletes an DeploymentPlatform document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentPlatformApi();
let deploymentPlatformId = "deploymentPlatformId_example"; // String | 

apiInstance.deleteDeploymentPlatformItem(deploymentPlatformId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentPlatformId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDeploymentPlatform"></a>
# **getDeploymentPlatform**
> DeploymentPlatform getDeploymentPlatform(deploymentPlatformId)

Retrieves a DeploymentPlatform document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentPlatformApi();
let deploymentPlatformId = "deploymentPlatformId_example"; // String | 

apiInstance.getDeploymentPlatform(deploymentPlatformId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentPlatformId** | **String**|  | 

### Return type

[**DeploymentPlatform**](DeploymentPlatform.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeploymentPlatforms"></a>
# **getDeploymentPlatforms**
> [DeploymentPlatform] getDeploymentPlatforms()

Retrieves one or more DeploymentPlatform documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentPlatformApi();
apiInstance.getDeploymentPlatforms((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DeploymentPlatform]**](DeploymentPlatform.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchDeploymentPlatformItem"></a>
# **patchDeploymentPlatformItem**
> patchDeploymentPlatformItem(body, deploymentPlatformId)

Updates a DeploymentPlatform document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentPlatformApi();
let body = new SmartClideDbApi.DeploymentPlatform(); // DeploymentPlatform | A Artist or list of DeploymentPlatform documents
let deploymentPlatformId = "deploymentPlatformId_example"; // String | 

apiInstance.patchDeploymentPlatformItem(body, deploymentPlatformId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeploymentPlatform**](DeploymentPlatform.md)| A Artist or list of DeploymentPlatform documents | 
 **deploymentPlatformId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postDeploymentPlatforms"></a>
# **postDeploymentPlatforms**
> postDeploymentPlatforms(body)

Creates one or more DeploymentPlatform documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentPlatformApi();
let body = new SmartClideDbApi.DeploymentPlatform(); // DeploymentPlatform | A Artist or list of DeploymentPlatform documents

apiInstance.postDeploymentPlatforms(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeploymentPlatform**](DeploymentPlatform.md)| A Artist or list of DeploymentPlatform documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

