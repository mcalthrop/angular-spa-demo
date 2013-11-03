/* global angular */

/**
 * @ngdoc service
 * @name ProfilesDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the profiles page.
 *
 */

angular.module(
        'ProfilesDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ProfilesDataService',
    function ($resource) {
        return $resource(
            'svc/profiles/profiles-data.json',
            {},
            {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }
        );
    }
);

/* EOF */