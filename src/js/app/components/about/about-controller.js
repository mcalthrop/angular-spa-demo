/* global angular */

/**
 * @ngdoc object
 * @name AboutController
 * @requires $scope
 * @requires MenuMainModel
 * @requires AboutDataService
 * @requires AboutWrapperService
 * @requires AboutModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the about page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the about data service, and set values on about model accordingly
 *   - call the about wrapper service, and set the values on the page title and header models accordingly
 *
 */

angular.module(
        'AboutControllerModule',
        [
        ]
    )
    .controller(
        'AboutController',
        [
            '$scope',
            'MenuMainModel',
            'AboutDataService',
            'AboutWrapperService',
            'AboutModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, AboutDataService, AboutWrapperService, AboutModel, PageTitleModel, PageHeaderModel) {
                $scope.aboutModel = AboutModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.ABOUT);

                AboutDataService.query(function (data) {
                    AboutModel.setParagraphs(data.paragraphs);
                });

                AboutWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );

/* EOF */