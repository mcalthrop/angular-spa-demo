/* global angular */

/**
 * @ngdoc directive
 * @name prPageHeader
 * @description
 *
 * Define the prPageHeader directive - set the value of `templateUrl` accordingly
 *
 */

angular.module(
        'PageHeaderDirectiveModule',
        [
        ]
    )
    .directive(
    'prPageHeader',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/page/page-header-view.html',
            link: function () {
            }
        };
    }
);
