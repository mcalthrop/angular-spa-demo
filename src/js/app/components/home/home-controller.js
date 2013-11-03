/* global angular */

/**
 * @ngdoc object
 * @name HomeController
 * @requires $scope
 * @requires MenuMainModel
 * @requires HomeDataService
 * @requires HomeWrapperService
 * @requires HomeModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Define controller for the Home page.
 *
 * Do the following:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the home data service, and set values on home model accordingly
 *   - call the home wrapper service, and set the values on the page title and header models accordingly
 *
 */

angular.module(
        'HomeControllerModule',
        [
        ]
    )
    .controller(
        'HomeController',
        [
            '$scope',
            'MenuMainModel',
            'HomeDataService',
            'HomeWrapperService',
            'HomeModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, HomeDataService, HomeWrapperService, HomeModel, PageTitleModel, PageHeaderModel) {
                $scope.homeModel = HomeModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.HOME);

                HomeDataService.query(function (data) {
                    HomeModel.setMarkdownParagraphs(data.markdownParagraphs);
                });

                HomeWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );

/* EOF */