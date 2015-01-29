'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stocksApp
 */
angular.module('App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
