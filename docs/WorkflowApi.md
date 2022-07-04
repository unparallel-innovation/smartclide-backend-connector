# SmartClideDbApi.WorkflowApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWorkflowItem**](WorkflowApi.md#deleteWorkflowItem) | **DELETE** /workflows/{workflowId} | Deletes an Workflow document
[**getWorkflowItem**](WorkflowApi.md#getWorkflowItem) | **GET** /workflows/{workflowId} | Retrieves a Workflow document
[**getWorkflows**](WorkflowApi.md#getWorkflows) | **GET** /workflows | Retrieves one or more Workflow documents
[**patchWorkflowItem**](WorkflowApi.md#patchWorkflowItem) | **PUT** /workflows/{workflowId} | Updates a Workflow document
[**postWorkflows**](WorkflowApi.md#postWorkflows) | **POST** /workflows | Creates one or more Workflow documents

<a name="deleteWorkflowItem"></a>
# **deleteWorkflowItem**
> deleteWorkflowItem(workflowId)

Deletes an Workflow document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.WorkflowApi();
let workflowId = "workflowId_example"; // String | 

apiInstance.deleteWorkflowItem(workflowId, (error, data, response) => {
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
 **workflowId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWorkflowItem"></a>
# **getWorkflowItem**
> Workflow getWorkflowItem(workflowId)

Retrieves a Workflow document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.WorkflowApi();
let workflowId = "workflowId_example"; // String | 

apiInstance.getWorkflowItem(workflowId, (error, data, response) => {
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
 **workflowId** | **String**|  | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkflows"></a>
# **getWorkflows**
> [Workflow] getWorkflows()

Retrieves one or more Workflow documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.WorkflowApi();
apiInstance.getWorkflows((error, data, response) => {
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

[**[Workflow]**](Workflow.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchWorkflowItem"></a>
# **patchWorkflowItem**
> patchWorkflowItem(body, workflowId)

Updates a Workflow document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.WorkflowApi();
let body = new SmartClideDbApi.Workflow(); // Workflow | A Workflow or list of Workflow documents
let workflowId = "workflowId_example"; // String | 

apiInstance.patchWorkflowItem(body, workflowId, (error, data, response) => {
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
 **body** | [**Workflow**](Workflow.md)| A Workflow or list of Workflow documents | 
 **workflowId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postWorkflows"></a>
# **postWorkflows**
> postWorkflows(body)

Creates one or more Workflow documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.WorkflowApi();
let body = new SmartClideDbApi.Workflow(); // Workflow | A Workflow or list of Workflow documents

apiInstance.postWorkflows(body, (error, data, response) => {
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
 **body** | [**Workflow**](Workflow.md)| A Workflow or list of Workflow documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

