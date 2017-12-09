app.controller('l-flow.description', function($scope, $state, $http) {
    $scope.flow = $scope.flow || {};
    
    $scope.flow.description = {
        globalObject: {},
        id: 0
    }
    
    $scope.flow.description.id = $state.params.data.id;
    
    function init(num) {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/rec/'+num
        })
        .then(function success(response) {
            $scope.flow.description.globalObject = response.data;
        });
    }

    init($state.params.data.id);
    
});