'use strict';

angular.module('delbApp')
  .controller('GroupsCtrl', ['$scope', function ($scope) {
    $scope.groups = [
      'Group 1',
      'Group 2',
      'Group 3'
    ];
  }]);
