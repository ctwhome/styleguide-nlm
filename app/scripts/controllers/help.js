'use strict';

/**
 * @ngdoc function
 * @name App.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
