# SmartClideDbApi.DeploymentApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeploymentItem**](DeploymentApi.md#deleteDeploymentItem) | **DELETE** /deployments/{deploymentId} | Deletes an Deployment document
[**getDeploymentItem**](DeploymentApi.md#getDeploymentItem) | **GET** /deployments/{deploymentId} | Retrieves a Deployment document
[**getDeployments**](DeploymentApi.md#getDeployments) | **GET** /deployments | Retrieves one or more Deployment documents
[**patchDeploymentItem**](DeploymentApi.md#patchDeploymentItem) | **PUT** /deployments/{deploymentId} | Updates a Deployment document
[**postDeployments**](DeploymentApi.md#postDeployments) | **POST** /deployments | Creates one or more Deployment documents

<a name="deleteDeploymentItem"></a>
# **deleteDeploymentItem**
> deleteDeploymentItem(deploymentId)

Deletes an Deployment document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentApi();
let deploymentId = "deploymentId_example"; // String | 

apiInstance.deleteDeploymentItem(deploymentId, (error, data, response) => {
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
 **deploymentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDeploymentItem"></a>
# **getDeploymentItem**
> Deployment getDeploymentItem(deploymentId)

Retrieves a Deployment document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentApi();
let deploymentId = "deploymentId_example"; // String | 

apiInstance.getDeploymentItem(deploymentId, (error, data, response) => {
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
 **deploymentId** | **String**|  | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeployments"></a>
# **getDeployments**
> [Deployment] getDeployments()

Retrieves one or more Deployment documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentApi();
apiInstance.getDeployments((error, data, response) => {
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

[**[Deployment]**](Deployment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchDeploymentItem"></a>
# **patchDeploymentItem**
> patchDeploymentItem(body, deploymentId)

Updates a Deployment document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentApi();
let body = new SmartClideDbApi.Deployment(); // Deployment | A Deployment or list of Deployment documents
let deploymentId = "deploymentId_example"; // String | 

apiInstance.patchDeploymentItem(body, deploymentId, (error, data, response) => {
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
 **body** | [**Deployment**](Deployment.md)| A Deployment or list of Deployment documents | 
 **deploymentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postDeployments"></a>
# **postDeployments**
> postDeployments(body)

Creates one or more Deployment documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.DeploymentApi();
let body = new SmartClideDbApi.Deployment(); // Deployment | A Deployment or list of Deployment documents

apiInstance.postDeployments(body, (error, data, response) => {
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
 **body** | [**Deployment**](Deployment.md)| A Deployment or list of Deployment documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

