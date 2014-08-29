/* global angular */

/**
 * @ngdoc filter
 * @name MarkdownToHtml
 * @description
 *
 * This filter treats its input as Markdown text, and returns HTML.
 *
 * @param {String} markdownText The Markdown text to convert
 * @returns {String} The converted text
 *
 */

// TODO: write unit tests for this filter

angular.module(
        'MarkdownToHtmlFilterModule',
        [
        ]
    ).filter(
    'MarkdownToHtml',
    function () {
        var converter = new Showdown.converter();

        return function (markdownText) {
            return converter.makeHtml(markdownText);
        };
    }
);
