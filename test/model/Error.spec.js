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
    describe('Error', function() {
      beforeEach(function() {
        instance = new SmartClideDbApi.Error();
      });

      it('should create an instance of Error', function() {
        // TODO: update the code to test Error
        expect(instance).to.be.a(SmartClideDbApi.Error);
      });

      it('should have the property status (base name: "_status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "_error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

    });
  });

}));