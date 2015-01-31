'use strict';

/**
 * @ngdoc function
 * @name App.controller:CourseCtrl
 * @description
 * # CourseCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('CourseCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
