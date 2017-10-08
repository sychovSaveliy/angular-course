myApp.controller("page_1.ctrl", function ($scope, $data) {
    var ctrl = this;

    ctrl._init = _init;
    ctrl.handler = handler;

    function _init() {
        console.log('page 1 init');
    }

    function handler() {
        $data.setVal('name', 'Petya');
    }


    ctrl._init();
});