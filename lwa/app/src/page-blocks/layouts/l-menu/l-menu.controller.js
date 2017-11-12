app.controller('l-flow.menu', function($scope, $http) {
    $scope.flow = $scope.flow || {};

    $scope.flow.menu = {
        list: []
    };

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/menu'
        })
        .then(function success(response) {
            $scope.flow.menu.list = response.data.list;
        });
    }

    init();
});