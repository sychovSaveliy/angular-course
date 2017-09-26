myApp.controller("childCtrl", function ($scope) {
    $scope.title = 'This is childCtrl';
    
    $scope.sendToParent = function (data) {
        $scope.$emit('dataFromInput', data);
    }
});