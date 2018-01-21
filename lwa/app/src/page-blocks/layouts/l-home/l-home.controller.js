app.controller('l-flow.home', function($scope, $alert) {
    $scope.flow = $scope.flow || {};
    $scope.flow.home = {};

    $alert.showMessage({ message: 'Asset was added to Lightbox.' }, 'success');
});