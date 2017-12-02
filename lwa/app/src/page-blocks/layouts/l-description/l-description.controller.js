app.controller('l-flow.description', function($scope, $state, $http) {
    $scope.flow = $scope.flow || {};
    
    $scope.flow.description = {
        globalObject: {},
        title: '',
        text: '',
        id: 0
    }
    
    $scope.flow.description.id = $state.params.data.id;
    
    console.log($state);
    console.log($scope.flow.description);
    $scope.flow.description.title = $scope.flow.description.id;
    $scope.flow.description.text = $scope.flow.description.id;
   
    function init(num) {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/rec'+num
        })
        .then(function success(response) {
            $scope.flow.description.globalObject = response.data;
        });
    }

    init($state.params.data.id);
    
});