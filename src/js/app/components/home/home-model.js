/* global angular */

/**
 * @ngdoc object
 * @name HomeModel
 * @function
 * @description
 *
 * This is the model for the Home page.
 *
 */

angular.module(
        'HomeModelModule',
        [
        ]
    )
    .factory(
    'HomeModel',
    function () {
        var _markdownParagraphs = [];

        return {
            /**
             * @ngdoc method
             * @name HomeModel#setMarkdownParagraphs
             * @methodOf HomeModel
             * @description
             *
             * Setter for the Markdown paragraphs on the model.
             *
             * @param {Array} newMarkdownParagraphs The array of Markdown paragraphs to set.
             *
             * @returns {void} void
             *
             */
            setMarkdownParagraphs: function (newMarkdownParagraphs) {
                _markdownParagraphs = newMarkdownParagraphs;
            },
            /**
             * @ngdoc method
             * @name HomeModel#getMarkdownParagraphs
             * @methodOf HomeModel
             * @description
             *
             * Getter for the Markdown paragraphs on the model.
             *
             * @returns {Array} The paragraphs in Markdown format.
             *
             */
            getMarkdownParagraphs: function () {
                return _markdownParagraphs;
            }
        };
    }
);

/* EOF */