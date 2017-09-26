var myApp = angular.module('myApp', []);
var model = {
    name: null,
    gender: null,
    email: null
};

myApp.controller("firstCtrl", function ($scope, $service_1, $service_2, $factory_1, $someValues, someDigit, someConst, myProv_1, myProv_2) {

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
    };

    $scope.valueOne = function () {
        console.log($someValues);
    };

    $scope.valueTwo = function () {
        console.log(someDigit);
    };

    $scope.constOne = function() {
        console.log(someConst);
    };

    $scope.providerOne = function () {
        console.log(myProv_1);
    };
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

myApp.value('$someValues', {
    config1: true,
    config2: "this is value"
});

myApp.value('someDigit', 10);

myApp.constant('someConst', {
    config1: true,
    config2: "Default config2"
});

myApp.provider('myProv_1', function() {
    return {
        $get: function() {
            var thisIsPrivate = "Private";
            function getPrivate() {
                return thisIsPrivate;
            }

            return {
                variable: "This is public",
                getPrivate: getPrivate
            };
        }
    };
});





