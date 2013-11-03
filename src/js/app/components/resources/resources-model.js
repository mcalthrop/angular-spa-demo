/* global angular */

/**
 * @ngdoc object
 * @name ResourcesModel
 * @function
 * @description
 *
 * This is the model for the About page.
 *
 */

angular.module(
        'ResourcesModelModule',
        [
        ]
    )
    .factory(
    'ResourcesModel',
    function () {
        var _paragraphs = [];

        return {
            /**
             * @ngdoc method
             * @name ResourcesModel#setParagraphs
             * @methodOf ResourcesModel
             * @description
             *
             * Setter for the paragraphs on the model.
             *
             * @param {Array} newParagraphs The array of paragraphs to set.
             *
             * @returns {void} void
             *
             */
            setParagraphs: function (newParagraphs) {
                _paragraphs = newParagraphs;
            },
            /**
             * @ngdoc method
             * @name ResourcesModel#getParagraphs
             * @methodOf ResourcesModel
             * @description
             *
             * Getter for the paragraphs on the model.
             *
             * @returns {Array} The array of paragraphs.
             *
             */
            getParagraphs: function () {
                return _paragraphs;
            }
        };
    }
);

/* EOF */
