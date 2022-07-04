# SmartClideDbApi.TeamApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTeamtItem**](TeamApi.md#deleteTeamtItem) | **DELETE** /teams/{teamId} | Deletes an Team document
[**getTeamItem**](TeamApi.md#getTeamItem) | **GET** /teams/{teamId} | Retrieves a Team document
[**getTeams**](TeamApi.md#getTeams) | **GET** /teams | Retrieves one or more Team documents
[**patchTeamItem**](TeamApi.md#patchTeamItem) | **PUT** /teams/{teamId} | Updates a Team document
[**postTeams**](TeamApi.md#postTeams) | **POST** /teams | Creates one or more Team documents

<a name="deleteTeamtItem"></a>
# **deleteTeamtItem**
> deleteTeamtItem(teamId)

Deletes an Team document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.TeamApi();
let teamId = "teamId_example"; // String | 

apiInstance.deleteTeamtItem(teamId, (error, data, response) => {
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
 **teamId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTeamItem"></a>
# **getTeamItem**
> Team getTeamItem(teamId)

Retrieves a Team document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.TeamApi();
let teamId = "teamId_example"; // String | 

apiInstance.getTeamItem(teamId, (error, data, response) => {
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
 **teamId** | **String**|  | 

### Return type

[**Team**](Team.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> [Team] getTeams()

Retrieves one or more Team documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.TeamApi();
apiInstance.getTeams((error, data, response) => {
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

[**[Team]**](Team.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchTeamItem"></a>
# **patchTeamItem**
> patchTeamItem(body, teamId)

Updates a Team document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.TeamApi();
let body = new SmartClideDbApi.Team(); // Team | A Artist or list of Team documents
let teamId = "teamId_example"; // String | 

apiInstance.patchTeamItem(body, teamId, (error, data, response) => {
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
 **body** | [**Team**](Team.md)| A Artist or list of Team documents | 
 **teamId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postTeams"></a>
# **postTeams**
> postTeams(body)

Creates one or more Team documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.TeamApi();
let body = new SmartClideDbApi.Team(); // Team | A Artist or list of Team documents

apiInstance.postTeams(body, (error, data, response) => {
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
 **body** | [**Team**](Team.md)| A Artist or list of Team documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

