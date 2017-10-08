myApp.controller("pages.ctrl", function ($scope, $data) {
    var ctrl = this;

    ctrl._init = _init;

    function _init() {
        console.log('init');

        $scope.name = 'Text in Scope';

        $scope.value = $data.getVal('name');
    }

    ctrl._init();
});