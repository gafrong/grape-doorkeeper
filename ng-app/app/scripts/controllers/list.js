'use strict';

angular.module('delbApp')
  .controller('ListCtrl', ['$http', '$scope', 'ListService', function ($http, $scope, ListService) {
  
      $scope.heading = 'List';
      $scope.lists = [];
      $scope.successMsg = "";
      $scope.errorMsg = ""; 
      $scope.currentTabIndex = 1;
      
    $scope.getList = function(){
      ListService.getListItems()
      .success(function (returnData){
        $scope.lists = returnData;
      }).error(function (){
        $scope.errorMsg = "can't get the list"
      });
    };

    $scope.addList = function(){
      ListService.postListItem($scope.title, $scope.category, $scope.price, $scope.description)
      .success(function (){
        $scope.successMsg = "Uploaded successfully";
      }).error(function (){
        $scope.errorMsg = "oops!";
      });
      $scope.title = "";
      $scope.category = "";
      $scope.price = "";
      $scope.description = "";
      $scope.getList();
    };

    $scope.deleteList = function(id) {
      $http.delete('/api/v1/list/' + id)
      .success(function (){
        console.log('success');
      }).error(function(){
        console.log('fail');
      })
      $scope.getList();
    }

    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    };

    $scope.getList();
  }]);

