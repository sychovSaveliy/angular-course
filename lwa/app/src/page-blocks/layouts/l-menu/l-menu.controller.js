app.controller('l-flow.menu', function($scope, $flowData) {
    $scope.flow = $scope.flow || {};

    $scope.flow.menu = {
        list: []
    };

    console.log($flowData.menu());


    function init() {
        $flowData
            .menu()
            .then(function (response) {
                $scope.flow.menu.list = response.data.list;
            });
    }

    init();
});