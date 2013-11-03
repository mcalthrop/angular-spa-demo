/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing HomeModel:', function () {
    'use strict';

    var modelToTest,
        testMarkdownParagraphs1 = [
            'this',
            'that',
            'the other'
        ],
        testMarkdownParagraphs2 = [
            'some',
            'different',
            'values',
            'this',
            'time'
        ];

    beforeEach(module('HomeModelModule'));

    beforeEach(inject(function (HomeModel) {
        modelToTest = HomeModel;
    }));

    describe('markdown paragraphs setter', function () {

        it('is passed correct value', function () {
            spyOn(modelToTest, 'setMarkdownParagraphs');
            modelToTest.setMarkdownParagraphs(testMarkdownParagraphs1);
            expect(modelToTest.setMarkdownParagraphs).toHaveBeenCalledWith(testMarkdownParagraphs1);
        });

        it('should get the correct number of paragraphs', function () {
            spyOn(modelToTest, 'setMarkdownParagraphs');
            modelToTest.setMarkdownParagraphs(testMarkdownParagraphs1);
            expect(modelToTest.setMarkdownParagraphs.mostRecentCall.args[0].length).toEqual(testMarkdownParagraphs1.length);
        });

    });

    describe('markdown paragraphs getter', function () {

        it('should return empty array when no setter called', function () {
            expect(modelToTest.getMarkdownParagraphs()).toEqual([]);
        });

        it('should return parameters set', function () {
            modelToTest.setMarkdownParagraphs(testMarkdownParagraphs1);
            expect(modelToTest.getMarkdownParagraphs()).toEqual(testMarkdownParagraphs1);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setMarkdownParagraphs(testMarkdownParagraphs1);
            modelToTest.setMarkdownParagraphs(testMarkdownParagraphs2);
            expect(modelToTest.getMarkdownParagraphs()).toEqual(testMarkdownParagraphs2);
        });

    });

});

/* EOF */