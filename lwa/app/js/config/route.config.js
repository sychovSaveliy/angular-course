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
        .state('courses', {
            url: '/courses',
            views: {
                '': {templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html'},
                'menu@courses': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'blockList@courses': {
                    templateUrl: 'app/src/page-blocks/layouts/l-course/l-course-description.html',
                    controller: 'l-course.blockDescription'
                },
                params: {
                    data: {}
                }
            }
        })


});