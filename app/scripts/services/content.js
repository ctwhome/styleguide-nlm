'use strict';

/**
 * @ngdoc service
 * @name stocksApp.content
 * @description
 * # content
 * Factory in the stocksApp.
 */
angular.module('App', ['ngResource'])
  .factory('content', function ($resource) {

        var Contacts = $resource(
            'https://api.mongolab.com/api/1/databases/addressbook/collections/contacts/:id',
            { apiKey: 'RO27EEbdFsJfycTn_JUiAnr3qIcsgyxS' },
            { update: { method: 'PUT' } }
        );

        Contacts.prototype.update = function(cb) {
            return Contacts.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        Contacts.prototype.delete = function(cb) {
            return Contacts.remove({id: this._id.$oid}, cb);
        };

        return Contacts;


  });
