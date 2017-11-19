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
                'courses@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-courses/l-courses.html',
                    controller: 'l-flow.courses'
                }
            },
            params: {
                data: {}
            }
        })
        .state('course', {
            url: '/course',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
                'menu@course': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'courses@course': {
                    templateUrl: 'app/src/page-blocks/layouts/l-courses/l-one.course.html',
                    controller: 'l-flow.oneCourse'
                }
            },
            params: {
                data: {}
            }
        })
});