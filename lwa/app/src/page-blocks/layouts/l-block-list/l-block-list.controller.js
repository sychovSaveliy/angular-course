app.controller('l-flow.block-list', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};
    $scope.flow.blockList = {
        list: []
    }
    
    $scope.goTo = function (data){
        $state.go("Description", {
            data: data
        })
    };
    
    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {
            $scope.flow.blockList.list = response.data.data.list;
        });
    }
    init();
    
});