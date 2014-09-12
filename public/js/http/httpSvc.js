'use strict';
angular.module('chatApp')
  .factory('httpSvc', function($resource) {
    return $resource('api/collections/demotiy',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
      });
  })
  .factory('httpSvc2', function($resource) {
    return $resource('api/collections/demotiy/:id',
      {
        id: '@_id'
      },
      {
        show: { method: 'GET'},
        edit: { method: 'PUT'},
        delete: { method: 'DELETE'}
      }
      )
  });