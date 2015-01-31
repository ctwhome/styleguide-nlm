'use strict';

/**
 * @ngdoc function
 * @name App.controller:DocumentationCtrl
 * @description
 * # DocumentationCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('DocumentationCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
