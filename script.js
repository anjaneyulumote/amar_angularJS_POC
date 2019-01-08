var app = angular.module('angularTable', []);

app.controller('listdata', function($scope, $http) {

  $scope.users = []; 

  $http.get("data.json").success(function(response) {    
    $scope.users = response;
  });

});