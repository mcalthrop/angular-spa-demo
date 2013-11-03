/* global angular */

/**
 * @ngdoc service
 * @name ResourcesWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the resources page.
 *
 */

angular.module(
        'ResourcesWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ResourcesWrapperService',
    function ($resource) {
        return $resource(
            'svc/resources/resources-wrapper.json',
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
