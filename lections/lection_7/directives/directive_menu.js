myApp.directive("menuBlock", function () {
    return {
        scope: {
            menuBlock: "="
        },
        link: function ($scope, element, attrs) {
            console.log($scope.menuBlock);
        },
        restrict: "A",
        templateUrl: 'directives/directive_menu.html',
        // replace: true,
    }
});