/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockResourcesDataJsonModule',
            [
            ]
        )
        .value(
        'MockResourcesDataJson',
        {
            results: [
                'This is the first paragraph.',
                'This is the second.',
                'And for good measure, this is the third.'
            ]
        }
    );
}(angular));

/* EOF */
