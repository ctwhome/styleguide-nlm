'use strict';

/**
 * @ngdoc function
 * @name App.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the App
 */
angular.module('App')
    .controller('SidebarCtrl', function ($scope, $layout) {

        $scope.$on('toggleSidebar', function(event, args) {

           $layout.layoutSettings.sidebar.isOpen = !$layout.layoutSettings.sidebar.isOpen;
           $layout.layoutSettings.sidebar.isOpen ? $scope.collapsed = "collapsed" : $scope.collapsed = "";

            console.log('collapse ',$scope.collapsed);
            console.log('$layout.layoutSettings.sidebar.isOpen: ', $layout.layoutSettings.sidebar.isOpen);
            console.log(args);
        });

        $scope.settingsPaneToggle = function ($rootScope) {
            $rootScope.$broadcast('toggleSettingsPane');
        }

        /**
         * Mobile Menu
         */
        $scope.mobileMenuToggle = function ($rootScope) {
            $rootScope.$broadcast('mobileMenuToggle');
        }
    });
