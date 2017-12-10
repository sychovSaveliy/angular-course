var myApp = angular.module('myApp', []);

myApp.controller("firstCtrl", function ($scope, $timeout) {
    $scope.message = 'Hello, its Lection 7';

    $scope.value = 500;

    $timeout(function(){
        $scope.value += 200;
    }, 2000);
    
    $scope.doIt = function () {
        console.log("DO IT");
    }
});