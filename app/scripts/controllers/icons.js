'use strict';

/**
 * @ngdoc function
 * @name App.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the App
 */

angular.module('App').
    controller('IconsCtrl', ['$scope', function($scope) {
        $scope.activeTab = 'tab1';
        $scope.tabTemplates = {
            tab1: 'views/icons-1.html',
            tab2: 'views/icons-2.html',
            tab3: 'views/icons-3.html'
        };

        $scope.switchTabTo = function (tabId) {
            $scope.activeTab = tabId;
            /* other stuff to do */
        };
    }]);