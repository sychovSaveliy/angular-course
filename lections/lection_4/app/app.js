var myApp = angular.module('myApp', ['ngRoute'])


.config(function($routeProvider){
    $routeProvider.when('/pages',
        {
            templateUrl:' app/pages/pages.html',
            controller: 'pages.ctrl',
            controllerAs: 'ctrl'
        });
    $routeProvider.when('/page/1',
        {
            templateUrl:'app/pages/page_1.html',
            controller: 'page_1.ctrl',
            controllerAs: 'ctrl'
        });
});




myApp.service('$data', function() {

    var value = {};

    this.setVal = function (prop, val) {
        value[prop] = val;
    };

    this.getVal = function (prop) {
        return value[prop];
    };
});


