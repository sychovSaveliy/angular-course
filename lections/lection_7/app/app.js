var myApp = angular.module('myApp', []);

myApp.controller("firstCtrl", function ($scope) {
    $scope.message = 'Hello, its Lection 7';

    $scope.value = 500;
    
    $scope.doIt = function () {
        console.log("DO IT");
    }
});