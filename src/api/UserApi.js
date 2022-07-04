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
import {User} from '../model/User';

/**
* User service.
* @module api/UserApi
* @version 1.0
*/
export class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteUsertItem operation.
     * @callback moduleapi/UserApi~deleteUsertItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an User document
     * @param {String} userId 
     * @param {module:api/UserApi~deleteUsertItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUsertItem(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUsertItem");
      }

      let pathParams = {
        'userId': userId
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
        '/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserItem operation.
     * @callback moduleapi/UserApi~getUserItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a User document
     * @param {String} userId 
     * @param {module:api/UserApi~getUserItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUserItem(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserItem");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = User;

      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getusers operation.
     * @callback moduleapi/UserApi~getusersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves one or more User documents
     * @param {module:api/UserApi~getusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getusers(callback) {
      
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
      let returnType = [User];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the patchUserItem operation.
     * @callback moduleapi/UserApi~patchUserItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a User document
     * @param {module:model/User} body A Artist or list of User documents
     * @param {String} userId 
     * @param {module:api/UserApi~patchUserItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchUserItem(body, userId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchUserItem");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling patchUserItem");
      }

      let pathParams = {
        'userId': userId
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
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postusers operation.
     * @callback moduleapi/UserApi~postusersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates one or more User documents
     * @param {module:model/User} body A Artist or list of User documents
     * @param {module:api/UserApi~postusersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postusers(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postusers");
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
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}