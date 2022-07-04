# SmartClideDbApi.UserApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsertItem**](UserApi.md#deleteUsertItem) | **DELETE** /users/{userId} | Deletes an User document
[**getUserItem**](UserApi.md#getUserItem) | **GET** /users/{userId} | Retrieves a User document
[**getusers**](UserApi.md#getusers) | **GET** /users | Retrieves one or more User documents
[**patchUserItem**](UserApi.md#patchUserItem) | **PUT** /users/{userId} | Updates a User document
[**postusers**](UserApi.md#postusers) | **POST** /users | Creates one or more User documents

<a name="deleteUsertItem"></a>
# **deleteUsertItem**
> deleteUsertItem(userId)

Deletes an User document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.UserApi();
let userId = "userId_example"; // String | 

apiInstance.deleteUsertItem(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserItem"></a>
# **getUserItem**
> User getUserItem(userId)

Retrieves a User document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.UserApi();
let userId = "userId_example"; // String | 

apiInstance.getUserItem(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getusers"></a>
# **getusers**
> [User] getusers()

Retrieves one or more User documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.UserApi();
apiInstance.getusers((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchUserItem"></a>
# **patchUserItem**
> patchUserItem(body, userId)

Updates a User document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.UserApi();
let body = new SmartClideDbApi.User(); // User | A Artist or list of User documents
let userId = "userId_example"; // String | 

apiInstance.patchUserItem(body, userId, (error, data, response) => {
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
 **body** | [**User**](User.md)| A Artist or list of User documents | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postusers"></a>
# **postusers**
> postusers(body)

Creates one or more User documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.UserApi();
let body = new SmartClideDbApi.User(); // User | A Artist or list of User documents

apiInstance.postusers(body, (error, data, response) => {
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
 **body** | [**User**](User.md)| A Artist or list of User documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

