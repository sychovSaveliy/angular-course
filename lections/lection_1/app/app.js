var myApp = angular.module('myApp', []);

var model = {
    name: 'Vasya',
    age: 22,
    friends: [
        'Petya',
        'Katya',
        'Dusya',
        'Dusya',
        'Dusya'
    ]
};

myApp.controller("firstCtrl", function ($scope) {
    $scope.message = 'Hello';

    // $scope.model = model;
    $scope.model = angular.copy(model);


    $scope.handlerInScope = function() {
        console.log('Clicked');

        // $scope.model = model;
        $scope.model = angular.copy(model);
        console.log($scope.model,  model);
    };


    $scope.variable = true;
});