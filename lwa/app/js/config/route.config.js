app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: "/flow",
            views: {
                "menu": {
                    templateUrl: "app/src/page-blocks/layouts/l-menu/l-menu.html",
                    controller: 'l-flow.menu'
                },
                "blockList": {
                    templateUrl: "app/src/page-blocks/layouts/l-block-list/l-block-list.html",
                    controller: 'l-flow.block-list'
                }
            }
        })
});