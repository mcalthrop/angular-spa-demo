/* global describe, describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing PageHeaderModel:', function () {
    'use strict';

    var modelToTest,
        testHeader = 'this is a test title',
        testTitle2 = 'this is a different test title',
        testParagraphs1 = [
            'first paragraph',
            'second one',
            'and so on'
        ],
        testParagraphs2 = [
            'premier alinéa',
            'le deuxième',
            'et ainsi de suite'
        ];

    beforeEach(module('PageHeaderModelModule'));

    beforeEach(inject(function (PageHeaderModel) {
        modelToTest = PageHeaderModel;
    }));

    describe('title setter', function () {
        it('is passed correct value', function () {
            spyOn(modelToTest, 'setTitle');
            modelToTest.setTitle(testHeader);
            expect(modelToTest.setTitle).toHaveBeenCalledWith(testHeader);
        });
    });

    describe('title getter', function () {
        it('should return empty array when no setter called', function () {
            expect(modelToTest.getTitle()).toEqual('');
        });

        it('should return parameters set', function () {
            modelToTest.setTitle(testHeader);
            expect(modelToTest.getTitle()).toEqual(testHeader);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setTitle(testHeader);
            modelToTest.setTitle(testTitle2);
            expect(modelToTest.getTitle()).toEqual(testTitle2);
        });
    });

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
