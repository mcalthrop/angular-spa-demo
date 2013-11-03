/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockProfilesWrapperJsonModule',
            [
            ]
        )
        .value(
        'MockProfilesWrapperJson',
        {
            "title": "mock title",
            "header": {
                "title": "mock header title",
                "paragraphs": [
                    "mock header para 1",
                    "mock header para 2"
                ]
            }
        }
    );
}(angular));

/* EOF */
