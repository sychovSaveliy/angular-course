var myApp = angular.module('myApp', []);
var model = {
    name: null,
    gender: null,
    email: null
};

myApp.controller("firstCtrl", function ($scope) {

    $scope.reset = function() {
        $scope.user = angular.copy(model);
    };

    $scope.update = function() {
        model = angular.copy($scope.user);

        console.log(model);
    };

    $scope.reset();
});