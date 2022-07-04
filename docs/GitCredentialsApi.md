# SmartClideDbApi.GitCredentialsApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteGitCredentialsItem**](GitCredentialsApi.md#deleteGitCredentialsItem) | **DELETE** /git_credentials/{gitCredentialsId} | Deletes an GitCredentials document
[**getGitCredentials**](GitCredentialsApi.md#getGitCredentials) | **GET** /git_credentials | Retrieves one or more GitCredentials documents
[**getGitCredentialsItem**](GitCredentialsApi.md#getGitCredentialsItem) | **GET** /git_credentials/{gitCredentialsId} | Retrieves a GitCredentials document
[**patchGitCredentialsItem**](GitCredentialsApi.md#patchGitCredentialsItem) | **PUT** /git_credentials/{gitCredentialsId} | Updates a GitCredentials document
[**postGitCredentials**](GitCredentialsApi.md#postGitCredentials) | **POST** /git_credentials | Creates one or more GitCredentials documents

<a name="deleteGitCredentialsItem"></a>
# **deleteGitCredentialsItem**
> deleteGitCredentialsItem(gitCredentialsId)

Deletes an GitCredentials document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.GitCredentialsApi();
let gitCredentialsId = "gitCredentialsId_example"; // String | 

apiInstance.deleteGitCredentialsItem(gitCredentialsId, (error, data, response) => {
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
 **gitCredentialsId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGitCredentials"></a>
# **getGitCredentials**
> [GitCredentials] getGitCredentials()

Retrieves one or more GitCredentials documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.GitCredentialsApi();
apiInstance.getGitCredentials((error, data, response) => {
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

[**[GitCredentials]**](GitCredentials.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGitCredentialsItem"></a>
# **getGitCredentialsItem**
> GitCredentials getGitCredentialsItem(gitCredentialsId)

Retrieves a GitCredentials document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.GitCredentialsApi();
let gitCredentialsId = "gitCredentialsId_example"; // String | 

apiInstance.getGitCredentialsItem(gitCredentialsId, (error, data, response) => {
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
 **gitCredentialsId** | **String**|  | 

### Return type

[**GitCredentials**](GitCredentials.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchGitCredentialsItem"></a>
# **patchGitCredentialsItem**
> patchGitCredentialsItem(body, gitCredentialsId)

Updates a GitCredentials document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.GitCredentialsApi();
let body = new SmartClideDbApi.GitCredentials(); // GitCredentials | A GitCredentials or list of GitCredentials documents
let gitCredentialsId = "gitCredentialsId_example"; // String | 

apiInstance.patchGitCredentialsItem(body, gitCredentialsId, (error, data, response) => {
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
 **body** | [**GitCredentials**](GitCredentials.md)| A GitCredentials or list of GitCredentials documents | 
 **gitCredentialsId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postGitCredentials"></a>
# **postGitCredentials**
> postGitCredentials(body)

Creates one or more GitCredentials documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.GitCredentialsApi();
let body = new SmartClideDbApi.GitCredentials(); // GitCredentials | A GitCredentials or list of GitCredentials documents

apiInstance.postGitCredentials(body, (error, data, response) => {
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
 **body** | [**GitCredentials**](GitCredentials.md)| A GitCredentials or list of GitCredentials documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

