'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
angular
    .module('App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/documentation', {
              templateUrl: 'views/documentation.html',
              controller: 'DocumentationCtrl'
            })
            .when('/versionlog', {
              templateUrl: 'views/versionlog.html',
              controller: 'VersionlogCtrl'
            })
            .when('/icons', {
              templateUrl: 'views/icons.html',
              controller: 'IconsCtrl'
            })
            .when('/accessibility', {
              templateUrl: 'views/accessibility.html',
              controller: 'AccessibilityCtrl'
            })
            .when('/extra-search', {
              templateUrl: 'views/extra-search.html',
              controller: 'ExtraSearchCtrl'
            })
            .when('/template-features', {
              templateUrl: 'views/template-features.html',
              controller: 'TemplateFeaturesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
