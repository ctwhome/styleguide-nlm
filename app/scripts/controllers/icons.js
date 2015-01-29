'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the stocksApp
 */
angular.module('App')
  .controller('IconsCtrl', function ($scope, $http) {

    var tabClasses;
      
      function initTabs() {
        tabClasses = ["","",""];
      }
      
      $scope.getTabClass = function (tabNum) {
        return tabClasses[tabNum];
      };
      
      $scope.getTabPaneClass = function (tabNum) {
        return "tab-pane " + tabClasses[tabNum];
      }
      
      $scope.setActiveTab = function (tabNum) {
        initTabs();
        tabClasses[tabNum] = "active";
      };


       $scope.tab1 = 'views/icons-1.html';
       $scope.tab2 = 'views/icons-2.html';
       $scope.tab3 = 'views/icons-3.html';
    

    $scope.fetchContent1 = function() {
        $http.get($scope.tab1).then(function(result){
             $scope.tab1 = result.data;
        });
    }

     $scope.fetchContent2 = function() {
        $http.get($scope.tab2).then(function(result){
             $scope.tab2 = result.data;
        });
    }

     $scope.fetchContent3 = function() {
        $http.get($scope.tab3).then(function(result){
             $scope.tab3 = result.data;
        });
    }
    $scope.fetchContent1();
    $scope.fetchContent2();
    $scope.fetchContent3();


     
            
      //Initialize 
      initTabs();
      $scope.setActiveTab(1);









  });