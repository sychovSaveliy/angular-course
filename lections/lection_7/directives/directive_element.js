myApp.directive("imageBlock", function () {
    return {
        link: function ($scope, element, attrs) {
            console.log($scope, element, attrs);


            $scope.message += " Directive changes";

            // $scope.$parent.message += '_1'
        },
        restrict: "EA",
        templateUrl: 'directives/directive_element.html',
        // replace: true,
        scope: true
    }
});