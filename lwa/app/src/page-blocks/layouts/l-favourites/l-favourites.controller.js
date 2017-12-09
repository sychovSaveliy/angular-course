app.controller('l-flow.favourites', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};
    $scope.flow.favourites = {
        list: []
    }
    
    $scope.toShow = function (id){
        var checked = localStorage.getItem('fav').split(' ');
        var show = false;
        for (var i=0;i<checked.length;i++){
            if (id==checked[i]){show=true};
        };
        return show;
    };
    
    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {
            $scope.flow.favourites.list = response.data.data.list;
        });
    }
    init();
    
    $scope.goTo = function (data){
        $state.go("Description", {
            data: data
        })
    };
    
});