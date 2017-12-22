app.controller('l-course.blockDescription', function($scope, $http) {
    $scope.flow = $scope.flow || {};
    $scope.flow.blockDescription = {
        // title: 'Hello',
        courses:[]
    };

    console.log('itworks')

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses/1'
        })
        .then(function (response) {
            $scope.flow.blockDescription.course = response.data;

        });
    }

    init();

});