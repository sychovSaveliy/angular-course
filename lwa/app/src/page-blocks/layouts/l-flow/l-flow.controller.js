app.controller('l-flow', function($scope, $state) {
    $scope.flow = {
        name: "flow",
        taskManager: {
            boards: [
                [
                    {
                        id: 1,
                        title: 'Task 1'
                    },
                    {
                        id: 2,
                        title: 'Task 2'
                    }
                ],
                []
            ]
        }
    };
});