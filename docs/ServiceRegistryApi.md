# SmartClideDbApi.ServiceRegistryApi

All URIs are relative to *https://api.dev.smartclide.eu/smartclide-db*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteServiceRegistryItem**](ServiceRegistryApi.md#deleteServiceRegistryItem) | **DELETE** /service_registries/{serviceRegistryId} | Deletes an ServiceRegistry document
[**getServiceRegistries**](ServiceRegistryApi.md#getServiceRegistries) | **GET** /service_registries | Retrieves one or more ServiceRegistry documents
[**getServiceRegistry**](ServiceRegistryApi.md#getServiceRegistry) | **GET** /service_registries/{serviceRegistryId} | Retrieves a ServiceRegistry document
[**patchServiceRegistryItem**](ServiceRegistryApi.md#patchServiceRegistryItem) | **PUT** /service_registries/{serviceRegistryId} | Updates a ServiceRegistry document
[**postServiceRegistries**](ServiceRegistryApi.md#postServiceRegistries) | **POST** /service_registries | Creates one or more ServiceRegistry documents

<a name="deleteServiceRegistryItem"></a>
# **deleteServiceRegistryItem**
> deleteServiceRegistryItem(serviceRegistryId)

Deletes an ServiceRegistry document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceRegistryApi();
let serviceRegistryId = "serviceRegistryId_example"; // String | 

apiInstance.deleteServiceRegistryItem(serviceRegistryId, (error, data, response) => {
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
 **serviceRegistryId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getServiceRegistries"></a>
# **getServiceRegistries**
> [ServiceRegistry] getServiceRegistries()

Retrieves one or more ServiceRegistry documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceRegistryApi();
apiInstance.getServiceRegistries((error, data, response) => {
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

[**[ServiceRegistry]**](ServiceRegistry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServiceRegistry"></a>
# **getServiceRegistry**
> ServiceRegistry getServiceRegistry(serviceRegistryId)

Retrieves a ServiceRegistry document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceRegistryApi();
let serviceRegistryId = "serviceRegistryId_example"; // String | 

apiInstance.getServiceRegistry(serviceRegistryId, (error, data, response) => {
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
 **serviceRegistryId** | **String**|  | 

### Return type

[**ServiceRegistry**](ServiceRegistry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchServiceRegistryItem"></a>
# **patchServiceRegistryItem**
> patchServiceRegistryItem(body, serviceRegistryId)

Updates a ServiceRegistry document

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceRegistryApi();
let body = new SmartClideDbApi.ServiceRegistry(); // ServiceRegistry | A ServiceRegistry or list of ServiceRegistry documents
let serviceRegistryId = "serviceRegistryId_example"; // String | 

apiInstance.patchServiceRegistryItem(body, serviceRegistryId, (error, data, response) => {
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
 **body** | [**ServiceRegistry**](ServiceRegistry.md)| A ServiceRegistry or list of ServiceRegistry documents | 
 **serviceRegistryId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postServiceRegistries"></a>
# **postServiceRegistries**
> postServiceRegistries(body)

Creates one or more ServiceRegistry documents

### Example
```javascript
import {SmartClideDbApi} from 'smart_clide_db_api';
let defaultClient = SmartClideDbApi.ApiClient.instance;


let apiInstance = new SmartClideDbApi.ServiceRegistryApi();
let body = new SmartClideDbApi.ServiceRegistry(); // ServiceRegistry | A ServiceRegistry or list of ServiceRegistry documents

apiInstance.postServiceRegistries(body, (error, data, response) => {
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
 **body** | [**ServiceRegistry**](ServiceRegistry.md)| A ServiceRegistry or list of ServiceRegistry documents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

