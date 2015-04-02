'use strict';

describe('Controller: PageLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var PageLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageLoginCtrl = $controller('PageLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
