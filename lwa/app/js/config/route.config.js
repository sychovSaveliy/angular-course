app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: '/flow',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
                'menu@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'blockList@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-block-list/l-block-list.html',
                    controller: 'l-flow.block-list'
                }
            }
        })
        .state('flow2', {
            url: '/flow2',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
                'blockList@flow2': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'menu@flow2': {
                    templateUrl: 'app/src/page-blocks/layouts/l-block-list/l-block-list.html',
                    controller: 'l-flow.block-list'
                }
            }
        })



});