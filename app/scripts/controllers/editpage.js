'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:EditpageCtrl
 * @description
 * # EditpageCtrl
 * Controller of the stocksApp
 */
angular.module('App')
  .controller('EditpageCtrl',
    function ($rootScope, $scope, $http) {

        $http.get('https://api.mongolab.com/api/1/databases/styleguide/collections/content?apiKey=9xkyuiXnGhk_EzhreL1uLaPqIoIIkOxo').
            success(function(data) {
                $scope.content = data[0].content;
            });

                $scope.content = "Loading content";

        $scope.ckEditors = [];
        $scope.addEditor = function(){

            $scope.ckEditors.push({value:$scope.content});
        }


  });
