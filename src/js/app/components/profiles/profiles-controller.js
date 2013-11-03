/* global angular */

/**
 * @ngdoc object
 * @name ProfilesController
 * @requires $scope
 * @requires MenuMainModel
 * @requires ProfilesDataService
 * @requires ProfilesWrapperService
 * @requires ProfilesModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the profiles page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the profiles data service, and set values on profiles model accordingly
 *   - call the profiles wrapper service, and set the values on the page title and header models accordingly
 *
 */

angular.module(
        'ProfilesControllerModule',
        [
        ]
    )
    .controller(
        'ProfilesController',
        [
            '$scope',
            'MenuMainModel',
            'ProfilesDataService',
            'ProfilesWrapperService',
            'ProfilesModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, ProfilesDataService, ProfilesWrapperService, ProfilesModel, PageTitleModel, PageHeaderModel) {
                $scope.profilesModel = ProfilesModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.PROFILES);

                ProfilesDataService.query(
                    function (data) {
                        ProfilesModel.setProfiles(data);
                    }
                );
                ProfilesWrapperService.query(
                    function (data) {
                        PageTitleModel.setTitle(data.title);
                        PageHeaderModel.setTitle(data.header.title);
                        PageHeaderModel.setParagraphs(data.header.paragraphs);
                    }
                );
            }
        ]
    );

/* EOF */