/* global angular */

/**
 * @ngdoc object
 * @name ResourcesController
 * @requires $scope
 * @requires MenuMainModel
 * @requires ResourcesDataService
 * @requires ResourcesWrapperService
 * @requires ResourcesModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the resources page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the resources data service, and set values on resources model accordingly
 *   - call the resources wrapper service, and set the values on the page title and header models accordingly
 *
 */

angular.module(
        'ResourcesControllerModule',
        [
        ]
    )
    .controller(
        'ResourcesController',
        [
            '$scope',
            'MenuMainModel',
            'ResourcesDataService',
            'ResourcesWrapperService',
            'ResourcesModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, ResourcesDataService, ResourcesWrapperService, ResourcesModel, PageTitleModel, PageHeaderModel) {
                $scope.resourcesModel = ResourcesModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.RESOURCES);

                ResourcesDataService.query(function (data) {
                    ResourcesModel.setParagraphs(data.paragraphs);
                });

                ResourcesWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );
