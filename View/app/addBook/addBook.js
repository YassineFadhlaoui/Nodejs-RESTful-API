'use strict';

angular.module('myApp.addBook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addBook', {
    templateUrl: 'addBook/addBook.html',
    controller: 'addBookCtrl'
  });
}])

.controller('addBookCtrl', ['$scope','$http',function($scope,$http) {
  $scope.submit = function() {
     $http.post('http://localhost:3000/library/book',$scope.formData).
     success(function(data) {
         alert("posted successfully");
     }).error(function(data) {
         alert("error in posting");
     })
 }
}]);
