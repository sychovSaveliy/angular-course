myApp.controller("parentCtrl", function ($scope) {
    $scope.title = 'This is parentCtrl';
    $scope.emptyValue = "Empty Value";

    $scope.$on('dataFromInput', function(event, data) {
        $scope.emptyValue = data;

        // event.stopPropagation();
    });
});