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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmartClideDbApi);
  }
}(this, function(expect, SmartClideDbApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Team', function() {
      beforeEach(function() {
        instance = new SmartClideDbApi.Team();
      });

      it('should create an instance of Team', function() {
        // TODO: update the code to test Team
        expect(instance).to.be.a(SmartClideDbApi.Team);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property workflows (base name: "workflows")', function() {
        // TODO: update the code to test the property workflows
        expect(instance).to.have.property('workflows');
        // expect(instance.workflows).to.be(expectedValueLiteral);
      });

      it('should have the property services (base name: "services")', function() {
        // TODO: update the code to test the property services
        expect(instance).to.have.property('services');
        // expect(instance.services).to.be(expectedValueLiteral);
      });

      it('should have the property deployments (base name: "deployments")', function() {
        // TODO: update the code to test the property deployments
        expect(instance).to.have.property('deployments');
        // expect(instance.deployments).to.be(expectedValueLiteral);
      });

    });
  });

}));
