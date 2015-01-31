'use strict';

/**
 * @ngdoc function
 * @name App.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the App
 */
angular.module('App')
    .controller('NavbarCtrl', function ($scope, $rootScope) {
        $scope.sidebarToggle = function () {
            $rootScope.$broadcast('toggleSidebar', 'holaa');
        }
    });
