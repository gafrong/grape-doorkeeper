'use strict';

angular.module('delbApp')
  .factory('ListService', ['$http', function($http){
    var endpoint = {
      GetListItems:'/api/v1/list.json',
      PostListItem: '/api/v1/list'
    };
    return {
      getListItems: function (returnData) {
        returnData = returnData || {};
        returnData.take = returnData.take || 10;
        returnData.skip = returnData.skip || 0;
        return $http.get(endpoint.GetListItems);
      },
      postListItem: function(title, category, price, description){
        return $http.post(endpoint.PostListItem, {
          title: title, 
          category: category, 
          price: price, 
          description: description
        });
      }
    };
  }]);