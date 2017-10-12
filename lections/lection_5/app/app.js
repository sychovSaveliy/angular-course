var myApp = angular.module('myApp', []);

myApp.controller("firstCtrl", function ($scope, $http) {
    $scope.message = 'Hello';

    var req = {
        method: 'POST',
        url: 'http://localhost:4101/list',
        data: {
            size: 10
        }
    };

    $http(req)
        .then(function(response){
            console.log(response);
        });
});