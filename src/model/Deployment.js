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
import {ApiClient} from '../ApiClient';

/**
 * The Deployment model module.
 * @module model/Deployment
 * @version 1.0
 */
export class Deployment {
  /**
   * Constructs a new <code>Deployment</code>.
   * @alias module:model/Deployment
   * @class
   * @param name {String} 
   * @param userId {String} 
   * @param gitCredentialsId {String} 
   * @param url {String} 
   * @param workflowId {String} 
   * @param serviceId {String} 
   * @param version {String} 
   * @param state {String} 
   * @param created {String} 
   * @param updated {String} 
   */
  constructor(name, userId, gitCredentialsId, url, workflowId, serviceId, version, state, created, updated) {
    this.name = name;
    this.userId = userId;
    this.gitCredentialsId = gitCredentialsId;
    this.url = url;
    this.workflowId = workflowId;
    this.serviceId = serviceId;
    this.version = version;
    this.state = state;
    this.created = created;
    this.updated = updated;
  }

  /**
   * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deployment} obj Optional instance to populate.
   * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Deployment();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'String');
      if (data.hasOwnProperty('git_credentials_id'))
        obj.gitCredentialsId = ApiClient.convertToType(data['git_credentials_id'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('workflow_id'))
        obj.workflowId = ApiClient.convertToType(data['workflow_id'], 'String');
      if (data.hasOwnProperty('service_id'))
        obj.serviceId = ApiClient.convertToType(data['service_id'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Deployment.prototype.id = undefined;

/**
 * @member {String} name
 */
Deployment.prototype.name = undefined;

/**
 * @member {String} userId
 */
Deployment.prototype.userId = undefined;

/**
 * @member {String} gitCredentialsId
 */
Deployment.prototype.gitCredentialsId = undefined;

/**
 * @member {String} url
 */
Deployment.prototype.url = undefined;

/**
 * @member {String} workflowId
 */
Deployment.prototype.workflowId = undefined;

/**
 * @member {String} serviceId
 */
Deployment.prototype.serviceId = undefined;

/**
 * @member {String} version
 */
Deployment.prototype.version = undefined;

/**
 * @member {String} state
 */
Deployment.prototype.state = undefined;

/**
 * @member {String} created
 */
Deployment.prototype.created = undefined;

/**
 * @member {String} updated
 */
Deployment.prototype.updated = undefined;

