app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/Home");

    $stateProvider
        .state('Home', {
        url: '/Home',
        views: {
            '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
            'menu@Home': {
                templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                controller: 'l-flow.menu'
            },
            'board@Home': {
                templateUrl: 'app/src/page-blocks/layouts/l-first-page/l-first-page.html',
                controller: 'l-flow.first-page'
            }
        }
        })
        .state('Vids', {
        url: '/Vids',
        views: {
            '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
            'menu@Vids': {
                templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                controller: 'l-flow.menu'
            },
            'board@Vids': {
                templateUrl: 'app/src/page-blocks/layouts/l-block-list/l-block-list.html',
                controller: 'l-flow.block-list'
            }
        }
        })
        .state('Contacts', {
        url: '/Contacts',
        views: {
            '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
            'menu@Contacts': {
                templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                controller: 'l-flow.menu'
            },
            'board@Contacts': {
                templateUrl: 'app/src/page-blocks/layouts/l-contacts/l-contacts.html',
                controller: 'l-flow.contacts'
            }
        }
        })
        .state('Description', {
        url: '/Description',
        views: {
            '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
            'menu@Description': {
                templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                controller: 'l-flow.menu'
            },
            'board@Description': {
                templateUrl: 'app/src/page-blocks/layouts/l-description/l-description.html',
                controller: 'l-flow.description'
            }
        },
        params: {
            data: {}
        }
    })
    

    });