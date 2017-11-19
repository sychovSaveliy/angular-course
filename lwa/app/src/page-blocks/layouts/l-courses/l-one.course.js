app.controller('l-flow.oneCourse', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};

    $scope.flow.course = {
        list: []
    };

    console.log($state);

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {
                $scope.course = response.data.data.list;

            });
    }

    init();

});