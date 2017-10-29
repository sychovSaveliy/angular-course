app.controller('formCtrl', function($scope, $form) {

    $scope.form = {
        text: 10
    };

    // console.log($form);
    $scope.ChangeHandler = function() {

        $scope.$parent.form = {
            valid: $scope.form.$valid,
            values: [
                $scope.form.$$controls[0].$valid,
                $scope.form.$$controls[1].$valid
            ]
        };

        // console.log($form);

    }
});