'use strict';

/**
 * @ngdoc function
 * @name App.controller:TemplateFeaturesCtrl
 * @description
 * # TemplateFeaturesCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('TemplateFeaturesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
