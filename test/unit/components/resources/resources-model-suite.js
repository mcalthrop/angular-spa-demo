/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing ResourcesModel:', function () {
    'use strict';

    var modelToTest,
        testParagraphs1 = [
            'this',
            'that',
            'the other'
        ],
        testParagraphs2 = [
            'some',
            'different',
            'values',
            'this',
            'time'
        ];

    beforeEach(module('ResourcesModelModule'));

    beforeEach(inject(function (ResourcesModel) {
        modelToTest = ResourcesModel;
    }));

    describe('paragraphs setter', function () {
        it('is passed correct value', function () {
            spyOn(modelToTest, 'setParagraphs');
            modelToTest.setParagraphs(testParagraphs1);
            expect(modelToTest.setParagraphs).toHaveBeenCalledWith(testParagraphs1);
        });

        it('should get the correct number of paragraphs', function () {
            spyOn(modelToTest, 'setParagraphs');
            modelToTest.setParagraphs(testParagraphs1);
            expect(modelToTest.setParagraphs.mostRecentCall.args[0].length).toEqual(testParagraphs1.length);
        });
    });

    describe('paragraphs getter', function () {
        it('should return empty array when no setter called', function () {
            expect(modelToTest.getParagraphs()).toEqual([]);
        });

        it('should return parameters set', function () {
            modelToTest.setParagraphs(testParagraphs1);
            expect(modelToTest.getParagraphs()).toEqual(testParagraphs1);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setParagraphs(testParagraphs1);
            modelToTest.setParagraphs(testParagraphs2);
            expect(modelToTest.getParagraphs()).toEqual(testParagraphs2);
        });
    });
});
