/* global angular */

/**
 * @ngdoc object
 * @name MainApp
 * @requires $routeProvider
 * @description
 *
 * This is the main script, which does the following:
 *
 *   - loads all the submodules
 *   - defines routes via `$routeProvider`
 *   - sets html5Mode to true (removes the # from the route in the URI)
 *
 */

angular.module(
        'MainApp',
        [
            'AppComponentsModule',
            'AppDirectivesModule',
            'AppFiltersModule',
            'AppLibrariesModule'
        ]
    ).config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/home',
                    {
                        templateUrl: 'js/app/components/home/home-main-view.html',
                        controller: 'HomeController'
                    }
                ).when(
                    '/profiles',
                    {
                        templateUrl: 'js/app/components/profiles/profiles-main-view.html',
                        controller: 'ProfilesController'
                    }
                ).when(
                    '/resources',
                    {
                        templateUrl: 'js/app/components/resources/resources-main-view.html',
                        controller: 'ResourcesController'
                    }
                ).when(
                    '/about',
                    {
                        templateUrl: 'js/app/components/about/about-main-view.html',
                        controller: 'AboutController'
                    }
                ).otherwise(
                    {
                        redirectTo: '/home'
                    }
                );
            }
        ]
    );

/* EOF */