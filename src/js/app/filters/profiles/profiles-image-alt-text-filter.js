/* global angular */

/**
 * @ngdoc filter
 * @name ProfilesImageAltText
 * @description
 *
 * This filter creates appropriate alt text for a profile image.
 *
 * If the alt-text for the image is non-blank, it is always returned.
 *
 * If the alt-text for the image is blank, set return value to first name + space + last name.
 *
 * If either first or last name is blank, return just the non-blank value
 *      (no leading or trailing space).
 *
 * If all params are blank, return empty string.
 *
 * @param {String} altTextDefault The default alt text to use - may be blank
 * @param {String} nameFirst The first name of the person associated with the image
 * @param {String} nameLast The last name
 * @returns {String} The filtered text
 *
 */

angular.module(
        'ProfilesImageAltTextFilterModule',
        [
        ]
    ).filter(
    'ProfilesImageAltText',
    function () {
        return function (altTextDefault, nameFirst, nameLast) {
            var altText = '';

            if (altTextDefault) {
                altText = altTextDefault;
            } else {
                if (nameFirst) {
                    altText = nameFirst;
                }
                if (nameLast) {
                    if (altText) {
                        altText += ' ';
                    }
                    altText += nameLast;
                }
            }

            return altText;
        };
    }
);

/* EOF */