/* global angular */

/**
 * @ngdoc directive
 * @name prMenuMain
 * @description
 *
 * Define the prMenuMain directive - set the value of `templateUrl` accordingly
 *
 */

angular.module(
        'MenuMainDirectiveModule',
        [
        ]
    )
    .directive(
    'prMenuMain',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/menu/menu-main-view.html',
            link: function () {
            }
        };
    }
);
