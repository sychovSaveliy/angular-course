var myApp = angular.module('myApp', []);

myApp.controller("firstCtrl", function ($scope) {
    $scope.message = 'Hello';
    $scope.showBtn = false;

    $scope.$on('dataFromInput', function(event, data) {
        console.log('MainCTRL', event, data);
        $scope.showBtn = true;
    });
    
    $scope.doIt = function () {
        $scope.$broadcast('dataFromInput', 100500);
        $scope.showBtn = false;
    }
});