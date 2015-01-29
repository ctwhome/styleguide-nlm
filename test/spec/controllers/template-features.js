'use strict';

describe('Controller: TemplateFeaturesCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var TemplateFeaturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplateFeaturesCtrl = $controller('TemplateFeaturesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
