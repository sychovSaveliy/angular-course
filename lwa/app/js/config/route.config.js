app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: "/flow",
            templateUrl: "app/src/page-blocks/layouts/l-flow/l-flow.html"
        })
        .state('flow.blockList', {
            url: "/list",
            templateUrl: "app/src/page-blocks/flow/flow.block-list.html",
            controller: 'l-flow.block-list'
        })
        .state('menu', {
            url: "/menu",
            templateUrl: "app/src/page-blocks/layouts/l-menu/l-menu.html"
        })
});