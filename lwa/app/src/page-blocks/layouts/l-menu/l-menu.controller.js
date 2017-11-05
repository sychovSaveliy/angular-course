app.controller('l-flow.menu', function($scope) {
    $scope.flow = $scope.flow || {};


    console.log($scope.flow);
    $scope.flow.menu = {
        list: [
            {
                title: "Item 1",
                hoverColor: 'black'
            },
            {
                title: "Item 2",
                hoverColor: 'green'
            },
            {
                title: "Item 3",
                hoverColor: 'yellow'
            }
        ]
    };
});