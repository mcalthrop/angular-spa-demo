/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockResourcesWrapperJsonModule',
            [
            ]
        )
        .value(
        'MockResourcesWrapperJson',
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
