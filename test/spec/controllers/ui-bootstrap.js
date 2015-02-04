'use strict';

describe('Controller: UiBootstrapCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var UiBootstrapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiBootstrapCtrl = $controller('UiBootstrapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
