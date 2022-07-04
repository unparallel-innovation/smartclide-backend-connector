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
 * The CiManager model module.
 * @module model/CiManager
 * @version 1.0
 */
export class CiManager {
  /**
   * Constructs a new <code>CiManager</code>.
   * @alias module:model/CiManager
   * @class
   * @param userId {String} 
   * @param type {module:model/CiManager.TypeEnum} 
   * @param url {String} 
   * @param username {String} 
   * @param token {String} 
   */
  constructor(userId, type, url, username, token) {
    this.userId = userId;
    this.type = type;
    this.url = url;
    this.username = username;
    this.token = token;
  }

  /**
   * Constructs a <code>CiManager</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CiManager} obj Optional instance to populate.
   * @return {module:model/CiManager} The populated <code>CiManager</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CiManager();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
CiManager.prototype.id = undefined;

/**
 * @member {String} userId
 */
CiManager.prototype.userId = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CiManager.TypeEnum = {
  /**
   * value: "jenkins"
   * @const
   */
  jenkins: "jenkins",

  /**
   * value: "gitlab_ci_cd"
   * @const
   */
  gitlabCiCd: "gitlab_ci_cd",

  /**
   * value: "github_actions"
   * @const
   */
  githubActions: "github_actions",

  /**
   * value: "travis"
   * @const
   */
  travis: "travis"
};
/**
 * @member {module:model/CiManager.TypeEnum} type
 */
CiManager.prototype.type = undefined;

/**
 * @member {String} url
 */
CiManager.prototype.url = undefined;

/**
 * @member {String} username
 */
CiManager.prototype.username = undefined;

/**
 * @member {String} token
 */
CiManager.prototype.token = undefined;

