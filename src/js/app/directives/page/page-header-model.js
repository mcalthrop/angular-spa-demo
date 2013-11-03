/* global angular */

/**
 * @ngdoc object
 * @name PageHeaderModel
 * @function
 * @description
 *
 * This is the model for the page header.
 *
 */

angular.module(
        'PageHeaderModelModule',
        [
        ]
    )
    .factory(
    'PageHeaderModel',
    function () {
        var _title = '',
            _paragraphs = [];

        return {
            /**
             * @ngdoc method
             * @name PageHeaderModel#setTitle
             * @methodOf PageHeaderModel
             * @description
             *
             * Setter for the title in the page header.
             *
             * @param {String} newTitle The new value for the page header title.
             * @returns {void} void
             *
             */
            setTitle: function (newTitle) {
                _title = newTitle;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#getTitle
             * @methodOf PageHeaderModel
             * @description
             *
             * Getter for the title in the page header.
             *
             * @returns {String} Page header title
             *
             */
            getTitle: function () {
                return _title;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#setParagraphs
             * @methodOf PageHeaderModel
             * @description
             *
             * Setter for the paragraphs in the page header.
             *
             * @param {Array} newParagraphs The new value for the page header paragraphs.
             * @returns {void} void
             *
             */
            setParagraphs: function (newParagraphs) {
                _paragraphs = newParagraphs;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#getParagraphs
             * @methodOf PageHeaderModel
             * @description
             *
             * Getter for the paragraphs in the page header.
             *
             * @returns {Array} Array of page header paragraphs
             *
             */
            getParagraphs: function () {
                return _paragraphs;
            }
        };
    }
);

/* EOF */