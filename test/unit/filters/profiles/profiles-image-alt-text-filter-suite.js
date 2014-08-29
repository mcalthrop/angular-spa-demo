/* global describe, beforeEach, module, inject, it, expect */

describe('Testing ProfilesImageAltText filter:', function () {
    'use strict';

    var filterToTest;

    beforeEach(module('ProfilesImageAltTextFilterModule'));

    beforeEach(inject(function (_ProfilesImageAltTextFilter_) {
        filterToTest = _ProfilesImageAltTextFilter_;
    }));

    describe('when alt text is already supplied', function () {
        it('should ignore when first & last name both non-blank', function () {
            var textToFilter = 'has something in it',
                nameFirst = 'Bruce',
                nameLast = 'Almighty',
                expectedResult = textToFilter;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should ignore when first name non-blank & last name blank', function () {
            var textToFilter = 'has something in it',
                nameFirst = 'Bruce',
                nameLast = '',
                expectedResult = textToFilter;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should ignore when first name blank & last name non-blank', function () {
            var textToFilter = 'has something in it',
                nameFirst = '',
                nameLast = 'Almighty',
                expectedResult = textToFilter;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should ignore when first name & last name both blank', function () {
            var textToFilter = 'has something in it',
                nameFirst = '',
                nameLast = '',
                expectedResult = textToFilter;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });
    });

    describe('when no alt text is supplied', function () {
        it('should concatenate with space first & last name when they are both non-blank', function () {
            var textToFilter = '',
                nameFirst = 'Bruce',
                nameLast = 'Almighty',
                expectedResult = nameFirst + ' ' + nameLast;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should return an empty string when first name and last name are both blank', function () {
            var textToFilter = '',
                nameFirst = '',
                nameLast = '',
                expectedResult = '';

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should return first name when first name non-blank & last name blank', function () {
            var textToFilter = '',
                nameFirst = 'Bruce',
                nameLast = '',
                expectedResult = nameFirst;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });

        it('should return last name when first name blank & last name non-blank', function () {
            var textToFilter = '',
                nameFirst = '',
                nameLast = 'Almighty',
                expectedResult = nameLast;

            expect(filterToTest(textToFilter, nameFirst, nameLast)).toEqual(expectedResult);
        });
    });
});
