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
        //https://api.mongolab.com/api/1/databases/styleguide/collections/content?q={"active": true}&fo=true&apiKey=myAPIKey


        var id = "second",
            apikey = "9xkyuiXnGhk_EzhreL1uLaPqIoIIkOxo",
            url = 'https://api.mongolab.com/api/1/databases/styleguide/collections/content?f={"_id":0, "id":0}&q={"id":"'+id+'"}&apiKey='+apikey;

        $scope.data = {
            Content: $scope.content,
            //title: $scope.content[0].title,
            //"menu-title": $scope.content[0].menu-title,
            id: id
        }

        $scope.content = "Loading content";

        /**
         * Load data
         */
        $http.get(url).
            success(function(data) {
                $scope.content = data;
                console.log(data);
            });


        /**
         * Open Editor
         * @type {Array}
         */
        $scope.ckEditors = [];
        $scope.addEditor = function(){

            $scope.ckEditors.push({value:$scope.content});
        }


        /**
         * Save data
         */
        $scope.saveData = function(){
            console.log($scope.data);
            $http.put(url, $scope.data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("Data saved");
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(data);
                });
        }
    });
