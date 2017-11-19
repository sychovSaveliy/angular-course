app.controller('l-flow.block-list', function($scope, $http) {
    $scope.flow = $scope.flow || {};
    $scope.flow.blockList = {
        title: 'Hello',
        courses:[]
    }

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {
                $scope.flow.blockList.courses = response.data.list;
            });
    }

    init();
});