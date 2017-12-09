app.controller('l-flow.block-list', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};
    $scope.flow.blockList = {
        list: []
    }
    
    if (localStorage.getItem('fav')){
//        console.log("fav exists")       
    } else {
        console.log("creating fav")
        localStorage.setItem('fav', '');
    };
    
    $scope.addFav = function (num){       
        var loved = localStorage.getItem('fav').split(' ');
        var check = false;
        console.log (loved);
        for (var i=0; i<loved.length; i++){
            if (loved[i]==num){
                check = true;
            };
        };
        if (check){
            for (var i=0; i<loved.length; i++){
                if (loved[i]==num){loved.splice(i,1)};
            };
        } else {
            loved[loved.length] = num;
        };
        localStorage.setItem('fav', loved.join(' '));
    };
    
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