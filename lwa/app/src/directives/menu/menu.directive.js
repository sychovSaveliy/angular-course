app.directive("menuBlock",function () {
    return {
        restrict: "A",
        scope: {
            list: "=menuBlock"
        },
        // replace: true,
        templateUrl:"app/src/directives/menu/menu.directive.html"
    }
});



