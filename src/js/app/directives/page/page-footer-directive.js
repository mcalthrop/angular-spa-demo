/* global angular */

/**
 * @ngdoc directive
 * @name prPageFooter
 * @description
 *
 * Define the prPageFooter directive - set the value of `templateUrl` accordingly
 *
 */

angular.module(
        'PageFooterDirectiveModule',
        [
        ]
    )
    .directive(
    'prPageFooter',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/page/page-footer-view.html',
            link: function () {
            }
        };
    }
);

/* EOF */