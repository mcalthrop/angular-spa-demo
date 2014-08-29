/* global angular */

/**
 * @ngdoc service
 * @name AboutDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the about page.
 *
 */

angular.module(
        'AboutDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'AboutDataService',
    function ($resource) {
        return $resource(
            'svc/about/about-data.json',
            {},
            {
                query: {
                    method: 'GET'
                }
            }
        );
    }
);
