var myApp = angular.module('myApp', []);
var model = {
    name: null,
    gender: null,
    email: null
};

myApp.controller("firstCtrl", function ($scope, $service_1, $service_2, $factory_1) {

    $scope.reset = function() {
        $scope.user = angular.copy(model);
    };

    $scope.update = function() {
        model = angular.copy($scope.user);

        console.log(model);
    };

    $scope.reset();





    //Services call

    $scope.serviceOne = function() {
        console.log($service_1);

        var res = $service_1.publicMethod(50);

        console.log(res);

        console.log($service_1.getPrivate());
    };

    $scope.serviceTwo = function() {
        console.log($service_2);
    };
    
    $scope.factoryOne = function () {
        console.log($factory_1);

        $factory_1.method(3);
    }
});


// Services
myApp.service('$service_1', function () {
    console.log('service_1, do it!');

    var private = 10;

    this.public = 5;

    this.publicMethod = function(x) {
        return 10 + x;
    };

    this.getPrivate = function() {
        return private;
    }

});


myApp.service('$service_2', function ($service_1) {
    console.log('service_2, do it!');

    this.data = {
        foo: "name" + $service_1.getPrivate(),
        age: 500
    }
});

myApp.factory('$factory_1', function () {
    return {
        foo: "name",
        age: 10,
        method: function(size) {
            console.log('do it ' + size + ' times');
        }
    }
});


