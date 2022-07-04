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
import {Deployment} from '../model/Deployment';

/**
* Deployment service.
* @module api/DeploymentApi
* @version 1.0
*/
export class DeploymentApi {

    /**
    * Constructs a new DeploymentApi. 
    * @alias module:api/DeploymentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteDeploymentItem operation.
     * @callback moduleapi/DeploymentApi~deleteDeploymentItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Deployment document
     * @param {String} deploymentId 
     * @param {module:api/DeploymentApi~deleteDeploymentItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDeploymentItem(deploymentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling deleteDeploymentItem");
      }

      let pathParams = {
        'deploymentId': deploymentId
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
        '/deployments/{deploymentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeploymentItem operation.
     * @callback moduleapi/DeploymentApi~getDeploymentItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Deployment document
     * @param {String} deploymentId 
     * @param {module:api/DeploymentApi~getDeploymentItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDeploymentItem(deploymentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling getDeploymentItem");
      }

      let pathParams = {
        'deploymentId': deploymentId
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
      let returnType = Deployment;

      return this.apiClient.callApi(
        '/deployments/{deploymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeployments operation.
     * @callback moduleapi/DeploymentApi~getDeploymentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Deployment>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves one or more Deployment documents
     * @param {module:api/DeploymentApi~getDeploymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDeployments(callback) {
      
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
      let returnType = [Deployment];

      return this.apiClient.callApi(
        '/deployments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the patchDeploymentItem operation.
     * @callback moduleapi/DeploymentApi~patchDeploymentItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Deployment document
     * @param {module:model/Deployment} body A Deployment or list of Deployment documents
     * @param {String} deploymentId 
     * @param {module:api/DeploymentApi~patchDeploymentItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchDeploymentItem(body, deploymentId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchDeploymentItem");
      }
      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling patchDeploymentItem");
      }

      let pathParams = {
        'deploymentId': deploymentId
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
        '/deployments/{deploymentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postDeployments operation.
     * @callback moduleapi/DeploymentApi~postDeploymentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates one or more Deployment documents
     * @param {module:model/Deployment} body A Deployment or list of Deployment documents
     * @param {module:api/DeploymentApi~postDeploymentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postDeployments(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postDeployments");
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
        '/deployments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}