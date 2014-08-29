/* global angular */

/**
 * @ngdoc object
 * @name MenuMainController
 * @requires $scope
 * @requires MenuMainModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */

angular.module(
        'MenuMainControllerModule',
        [
        ]
    )
    .controller(
        'MenuMainController',
        [
            '$scope',
            'MenuMainModel',
            function ($scope, MenuMainModel) {
                $scope.menuMainModel = MenuMainModel;
            }
        ]
    );
