/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockAboutDataJsonModule',
            [
            ]
        )
        .value(
        'MockAboutDataJson',
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