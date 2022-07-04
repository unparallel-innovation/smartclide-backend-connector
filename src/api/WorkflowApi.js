/*
 * SmartCLIDE DB API
 * An API for accessing the SmartCLIDE database. (A Keycloak token is required, Authorization Bearer Token, for accessing the API outside the AWS cluster)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Workflow} from '../model/Workflow';

/**
* Workflow service.
* @module api/WorkflowApi
* @version 1.0
*/
export class WorkflowApi {

    /**
    * Constructs a new WorkflowApi. 
    * @alias module:api/WorkflowApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteWorkflowItem operation.
     * @callback moduleapi/WorkflowApi~deleteWorkflowItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Workflow document
     * @param {String} workflowId 
     * @param {module:api/WorkflowApi~deleteWorkflowItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWorkflowItem(workflowId, callback) {
      
      let postBody = null;
      // verify the required parameter 'workflowId' is set
      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling deleteWorkflowItem");
      }

      let pathParams = {
        'workflowId': workflowId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/workflows/{workflowId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWorkflowItem operation.
     * @callback moduleapi/WorkflowApi~getWorkflowItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Workflow document
     * @param {String} workflowId 
     * @param {module:api/WorkflowApi~getWorkflowItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWorkflowItem(workflowId, callback) {
      
      let postBody = null;
      // verify the required parameter 'workflowId' is set
      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling getWorkflowItem");
      }

      let pathParams = {
        'workflowId': workflowId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Workflow;

      return this.apiClient.callApi(
        '/workflows/{workflowId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWorkflows operation.
     * @callback moduleapi/WorkflowApi~getWorkflowsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Workflow>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves one or more Workflow documents
     * @param {module:api/WorkflowApi~getWorkflowsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWorkflows(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Workflow];

      return this.apiClient.callApi(
        '/workflows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the patchWorkflowItem operation.
     * @callback moduleapi/WorkflowApi~patchWorkflowItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Workflow document
     * @param {module:model/Workflow} body A Workflow or list of Workflow documents
     * @param {String} workflowId 
     * @param {module:api/WorkflowApi~patchWorkflowItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchWorkflowItem(body, workflowId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchWorkflowItem");
      }
      // verify the required parameter 'workflowId' is set
      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling patchWorkflowItem");
      }

      let pathParams = {
        'workflowId': workflowId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/workflows/{workflowId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postWorkflows operation.
     * @callback moduleapi/WorkflowApi~postWorkflowsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates one or more Workflow documents
     * @param {module:model/Workflow} body A Workflow or list of Workflow documents
     * @param {module:api/WorkflowApi~postWorkflowsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postWorkflows(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postWorkflows");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/workflows', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}