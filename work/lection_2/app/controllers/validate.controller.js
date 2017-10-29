app.controller('validateCtrl', function($scope, $form) {

    // $scope.data = $scope.$parent.form;

    $scope.$watch('$parent.form', function(obj) {
        if(!obj.values) return;
        console.log(obj);
        $scope.first = obj.values[0];
        $scope.second = obj.values[1];
    });

    $scope.show = function () {
        // console.log($form.getData());
    }
});