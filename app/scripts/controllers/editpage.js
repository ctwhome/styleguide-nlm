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
        var id = "third",
            apikey = "9xkyuiXnGhk_EzhreL1uLaPqIoIIkOxo",
            url = 'https://api.mongolab.com/api/1/databases/styleguide/collections/content?f={"_id":0, "id":0}&q={"id":"' + id + '"}&apiKey=' + apikey;
        //
        //$scope.data= "Loading content";

        $scope.editor = false;
        $scope.inlineEditor = false;


        $scope.enableEdit = function () {
            //$scope.ckEditors.push({value:$scope.content});
            console.log($scope.inlineEditor);

            !$scope.inlineEditor ? $scope.loadCKEditor(): $scope.disableCKEditor();
            $scope.inlineEditor = !$scope.inlineEditor;
        }


        $scope.disableCKEditor = function () {
            CKEDITOR.instances.editor1.destroy();
        }


        CKEDITOR.disableAutoInline = true;
        $scope.loadCKEditor = function () {

            CKEDITOR.inline( 'editor1',{
                toolbar: [
                    ['Source'],
                    ['Cut', 'Copy', 'Paste'],
                    ['Undo', 'Redo'],
                    ['Bold', 'Italic', 'Underline']
                ]
            } );
           // CKEDITOR.inlineAll();

        }
        /**
         * Load data
         */
        $http.get(url).
            success(function (data) {
                $scope.data = {
                    title: data[0].title,
                    content: data[0].content,
                    menutitle: data[0].menutitle,
                    id: id
                }
                //setTimeout(function(){
                //    $scope.loadCKEditor();
                //},1000)



            });


        /**
         * Open Editor
         * @type {Array}
         */
        $scope.ckEditors = [];
        $scope.addEditor = function () {
            //$scope.ckEditors.push({value:$scope.content});
            $scope.editor = !$scope.editor;
            console.log($scope.editor);
        }

        /**
         * Close Editor
         */
        $scope.closeEditor = function () {
            //$scope.ckEditors =[];
            $scope.editor = !$scope.editor;
        }

        /**
         * Save data
         */
        $scope.saveData = function () {
            console.log($scope.data);
            $http.put(url, $scope.data).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("Data saved");
                    $scope.closeEditor();
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(data);
                });
        }
    });
