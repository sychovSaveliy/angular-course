app.directive("dragndrop", function () {
    return {
        restrict: "A",
        scope: {},
        link: function ($scope, $element, attrs) {
            var ctrl = this;

            $scope.foo = Math.random();

            ctrl.onDragStart = onDragStart;
            ctrl.onDrag = onDrag;
            ctrl.onDragEnd = onDragEnd;
            ctrl.onDrop = onDrop
            
            var isDragged = false;

            $element[0].draggable = $element[0].draggable || true;
            $element.on('dragstart', ctrl.onDragStart);
            $element.on('drag', ctrl.onDrag);
            
            $element.on('dragover drop', ctrl.onDrop);
            $element.on('dragend', ctrl.onDragEnd);

            function onDragStart(event) {
                if (isDragged) {
                    return;
                }

                isDragged = true;
                console.log('dragstart', event, $scope.foo);
            }

            function onDrag(event) {
                // console.log('drag', event);
            }

            function onDragEnd(event) {
                isDragged = false;
                console.log('dragend', event, $scope.foo);
            }

            function onDrop(event) {
                event.preventDefault();
                if (event.type != 'drop') {
                    return;
                }

                isDragged = false;
                console.log('drop', event, $scope.foo);
            }
        }
    }
});