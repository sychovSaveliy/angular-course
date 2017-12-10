myApp.directive("isolatedScope", function () {
    return {
        link: function ($scope, element, attrs) {
            // console.log($scope, element, attrs);
           
            $scope.value2 += 10;
            $scope.message += " Directive changes";
            $scope.doIt = $scope.value3();
            console.log($scope.doIt());
        },
        restrict: "A",
        templateUrl: 'directives/directive_isolated_scope.html',
        // replace: true,
        scope: {
            value1: "@",
            value2: "=",
            value3: "&",
            someVal: "=anotherAttrName"
        }
    }
});


// Префикс "@" означает, что локальной переменной 
// будет присвоено значение атрибута:

// Префикс "=" означает, что в атрибуте передается уже не строчка,
// а имя некоторой переменной в текущем Scope. И локальная переменная будет напрямую с ней связана.