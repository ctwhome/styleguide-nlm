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
    .config(
        function ($routeProvider,$locationProvider) {
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
                .when('/color', {
                  templateUrl: 'views/color.html',
                  controller: 'ColorCtrl'
                })
                .when('/ui-bootstrap', {
                  templateUrl: 'views/ui-bootstrap.html',
                  controller: 'UiBootstrapCtrl'
                })
                .when('/editpage', {
                  templateUrl: 'views/editpage.html',
                  controller: 'EditpageCtrl'
                })
                .when('/dragable', {
                  templateUrl: 'views/dragable.html',
                  controller: 'DragableCtrl'
                })
                .when('/forms', {
                  templateUrl: 'views/forms.html',
                  controller: 'FormsCtrl'
                })
                .when('/page-login', {
                  templateUrl: 'views/page-login.html',
                  controller: 'PageLoginCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

        // use the HTML5 History API
        $locationProvider.html5Mode(false);
    });
