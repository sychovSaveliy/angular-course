app.controller('l-flow.courses', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};

    $scope.flow.courses = {
        list: []
    };

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {
                $scope.courses = response.data.data.list;

            });
    }

    init();
    $scope.goToCourse = function (info) {
        $state.go('course', { data: info });
    }
});