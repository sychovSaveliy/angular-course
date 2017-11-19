app.controller('l-flow.first-page', function($scope, $http) {
    $scope.flow = $scope.flow || {};
    
    $scope.flow.firstpage = {
        title: 'Hello',
        intext: ''
    }
    
    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/firtspage'
        })
            .then(function success(response) {
            $scope.flow.firstpage.title = response.data.title;
            $scope.flow.firstpage.intext = response.data.intext;
        });
    }
    
    init();
});