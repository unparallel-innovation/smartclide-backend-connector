# SmartClideDbApi.ServiceApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteServicetItem**](ServiceApi.md#deleteServicetItem) | **DELETE** /services/{serviceId} | Deletes an Service document
[**getServiceItem**](ServiceApi.md#getServiceItem) | **GET** /services/{serviceId} | Retrieves a Service document
[**getservices**](ServiceApi.md#getservices) | **GET** /services | Retrieves one or more Service documents
[**patchServiceItem**](ServiceApi.md#patchServiceItem) | **PUT** /services/{serviceId} | Updates a Service document
[**postservices**](ServiceApi.md#postservices) | **POST** /services | Creates one or more Service documents

<a name="deleteServicetItem"></a>
# **deleteServicetItem**
> deleteServicetItem(serviceId)

Deletes an Service document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceApi();
let serviceId = "serviceId_example"; // String | 

apiInstance.deleteServicetItem(serviceId, (error, data, response) => {
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
 **serviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getServiceItem"></a>
# **getServiceItem**
> Service getServiceItem(serviceId)

Retrieves a Service document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceApi();
let serviceId = "serviceId_example"; // String | 

apiInstance.getServiceItem(serviceId, (error, data, response) => {
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
 **serviceId** | **String**|  | 

### Return type

[**Service**](Service.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getservices"></a>
# **getservices**
> [Service] getservices()

Retrieves one or more Service documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceApi();
apiInstance.getservices((error, data, response) => {
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

[**[Service]**](Service.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchServiceItem"></a>
# **patchServiceItem**
> patchServiceItem(body, serviceId)

Updates a Service document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceApi();
let body = new SmartClideDbApi.Service(); // Service | A Service or list of Service documents
let serviceId = "serviceId_example"; // String | 

apiInstance.patchServiceItem(body, serviceId, (error, data, response) => {
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
 **body** | [**Service**](Service.md)| A Service or list of Service documents | 
 **serviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postservices"></a>
# **postservices**
> postservices(body)

Creates one or more Service documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceApi();
let body = new SmartClideDbApi.Service(); // Service | A Service or list of Service documents

apiInstance.postservices(body, (error, data, response) => {
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
 **body** | [**Service**](Service.md)| A Service or list of Service documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

