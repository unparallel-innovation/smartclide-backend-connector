# SmartClideDbApi.CiManagerApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCiManagerItem**](CiManagerApi.md#deleteCiManagerItem) | **DELETE** /ci_managers/{ciManagerId} | Deletes an CiManager document
[**getCiManagerItem**](CiManagerApi.md#getCiManagerItem) | **GET** /ci_managers/{ciManagerId} | Retrieves a CiManager document
[**getCiManagers**](CiManagerApi.md#getCiManagers) | **GET** /ci_managers | Retrieves one or more CiManager documents
[**patchCiManagerItem**](CiManagerApi.md#patchCiManagerItem) | **PUT** /ci_managers/{ciManagerId} | Updates a CiManager document
[**postCiManagers**](CiManagerApi.md#postCiManagers) | **POST** /ci_managers | Creates one or more CiManager documents

<a name="deleteCiManagerItem"></a>
# **deleteCiManagerItem**
> deleteCiManagerItem(ciManagerId)

Deletes an CiManager document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.CiManagerApi();
let ciManagerId = "ciManagerId_example"; // String | 

apiInstance.deleteCiManagerItem(ciManagerId, (error, data, response) => {
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
 **ciManagerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCiManagerItem"></a>
# **getCiManagerItem**
> CiManager getCiManagerItem(ciManagerId)

Retrieves a CiManager document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.CiManagerApi();
let ciManagerId = "ciManagerId_example"; // String | 

apiInstance.getCiManagerItem(ciManagerId, (error, data, response) => {
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
 **ciManagerId** | **String**|  | 

### Return type

[**CiManager**](CiManager.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCiManagers"></a>
# **getCiManagers**
> [CiManager] getCiManagers()

Retrieves one or more CiManager documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.CiManagerApi();
apiInstance.getCiManagers((error, data, response) => {
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

[**[CiManager]**](CiManager.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchCiManagerItem"></a>
# **patchCiManagerItem**
> patchCiManagerItem(body, ciManagerId)

Updates a CiManager document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.CiManagerApi();
let body = new SmartClideDbApi.CiManager(); // CiManager | A Artist or list of CiManager documents
let ciManagerId = "ciManagerId_example"; // String | 

apiInstance.patchCiManagerItem(body, ciManagerId, (error, data, response) => {
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
 **body** | [**CiManager**](CiManager.md)| A Artist or list of CiManager documents | 
 **ciManagerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postCiManagers"></a>
# **postCiManagers**
> postCiManagers(body)

Creates one or more CiManager documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.CiManagerApi();
let body = new SmartClideDbApi.CiManager(); // CiManager | A Artist or list of CiManager documents

apiInstance.postCiManagers(body, (error, data, response) => {
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
 **body** | [**CiManager**](CiManager.md)| A Artist or list of CiManager documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

