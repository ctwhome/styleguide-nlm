'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:TemplateFeaturesCtrl
 * @description
 * # TemplateFeaturesCtrl
 * Controller of the stocksApp
 */
angular.module('App')
  .controller('TemplateFeaturesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
