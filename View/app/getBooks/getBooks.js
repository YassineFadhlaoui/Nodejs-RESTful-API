'use strict';

angular.module('myApp.getBooks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/getBooks', {
    templateUrl: 'getBooks/getBooks.html',
    controller: 'getBooksCtrl'
  });
}])

.controller('getBooksCtrl', ['$scope',function($scope) {
    $.getJSON("http://localhost:3000/library/list", function(result){
      $scope.$apply(function () {
                  $scope.list = result
        });
    });
}]);
