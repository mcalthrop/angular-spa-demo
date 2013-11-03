/* global angular */

/**
 * @ngdoc service
 * @name ProfilesWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the profiles page.
 *
 */

angular.module(
        'ProfilesWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ProfilesWrapperService',
    function ($resource) {
        return $resource(
            'svc/profiles/profiles-wrapper.json',
            {},
            {
                query: {
                    method: 'GET'
                }
            }
        );
    }
);

/* EOF */