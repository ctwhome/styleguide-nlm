'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:EditpageCtrl
 * @description
 * # EditpageCtrl
 * Controller of the stocksApp
 */

angular.module('App')
    .controller('BasicContentCtrl',
    function ($rootScope, $scope, $route, $http) {

        /**
         * Access API rest
         * https://api.mongolab.com/api/1/databases/styleguide/collections/content?q={"active": true}&fo=true&apiKey=myAPIKey
         */
        var urlname = $route.current.params.name,
            apikey = "9xkyuiXnGhk_EzhreL1uLaPqIoIIkOxo",
            url = 'https://api.mongolab.com/api/1/databases/styleguide/collections/basic_content?f={"_id":0, "id":0}&q={"urlname":"' + urlname + '"}&apiKey=' + apikey;

        $scope.editor = false;

        /**
         * Load data
         */
        $http.get(url).
            success(function (data) {
                $scope.data = {
                    //"_id": data[0]._id[$oid],
                    "urlname": data[0].urlname,
                    "pageTitle": data[0].pageTitle,
                    "shortDescription": data[0].shortDescription,
                    "menuTitle": data[0].menuTitle,
                    "contentPage": data[0].contentPage
                }
                $scope.currentData = $scope.data;
            });

        /**
         * Toggle edition page
         */
        $scope.toggleEdit = function () {
            !$scope.editor ? $scope.loadCKEditor() : $scope.disableCKEditor();
            $scope.editor = !$scope.editor;
        }

        /**
         * Cancel edition
         */
        $scope.cancelEdit = function () {
            CKEDITOR.instances.contentEditor.setData($scope.currentData.contentPage);
            document.getElementById('pageTitle').textContent = $scope.currentData.pageTitle;
            document.getElementById('shortDescription').textContent = $scope.currentData.shortDescription;
            $scope.toggleEdit();
        }


        /**
         *  CKEDITOR
         */
        CKEDITOR.config.forcePasteAsPlainText = true;
        CKEDITOR.disableAutoInline = true;
        $scope.loadCKEditor = function () {

            CKEDITOR.replace('contentEditor');
           // CKEDITOR.replace( 'pageTitle', {toolbar: []});
           // CKEDITOR.inline( 'shortDescription');
            /*
             CKEDITOR.replace( 'contentEditor',
             {
             toolbar :
             [
             {
             items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ]
             },
             {
             items : [ 'Format']
             },
             {
             items : [ 'Link','Unlink' ]
             },
             {
             items : [ 'Indent','Outdent','-','BulletedList','NumberedList']
             },
             {
             items : [ 'Undo','Redo']
             }
             ]
             })
             */
            //CKEDITOR.inline( 'editor1',{
            //    toolbar: [
            //        ['Source'],
            //        ['Cut', 'Copy', 'Paste'],
            //        ['Undo', 'Redo'],
            //        ['Bold', 'Italic', 'Underline']
            //    ]
            //} );
            CKEDITOR.inlineAll();
 }
        $scope.disableCKEditor = function () {
             CKEDITOR.instances.contentEditor.destroy();
             //CKEDITOR.instances.shortDescription.destroy();
             //CKEDITOR.instances.pageTitle.destroy();
        }


        /**
         * Save data
         */
        $scope.saveData = function () {

            // Get the modified data

            //$scope.data.pageTitle = CKEDITOR.instances.pageTitle.getData();
            //$scope.data.shortDescription = CKEDITOR.instances.shortDescription.getData();
            $scope.data.pageTitle = document.getElementById('pageTitle').textContent;
            $scope.data.shortDescription = document.getElementById('shortDescription').textContent;
            $scope.data.contentPage = CKEDITOR.instances.contentEditor.getData();

            $http.put(url, $scope.data).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("Data saved");
                    console.log($scope.data);

                    // lose edit
                    $scope.toggleEdit();
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(data);
                });
        }
    });
