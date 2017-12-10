myApp.directive("imageBlock", function () {
    return {
        link: function ($scope, element, attrs) {
            console.log($scope, element, attrs);
        },
        restrict: "EA",
        templateUrl: 'directives/directive_element.html',
        scope: true
    }
});