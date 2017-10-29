var myApp = angular.module('myApp', []);

myApp.controller("firstCtrl", function ($scope, $timeout) {
    $scope.message = 'Hello';
    $scope.showBtn = false;

    $scope.$on('dataFromInput', function(event, data) {
        console.log('firstCtrl', event, data);
        $scope.showBtn = true;
    });
    
    $scope.doIt = function () {
        $scope.$broadcast('dataFromInput', 100500);
        $scope.showBtn = false;
    };



    // digest cycle

    $scope.valueChange = 10;

    setTimeout(function() {
        $scope.valueChange = 100;
    }, 2000);

    // $timeout(function() {
    //     $scope.valueChange = 200;
    // }, 2000);




    // with apply

    // setTimeout(function() {
    //     $scope.valueChange = 300;
    //
    //     $scope.$apply();
    // }, 2000);
});