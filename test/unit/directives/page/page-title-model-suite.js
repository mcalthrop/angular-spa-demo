/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing PageTitleModel:', function () {
    'use strict';

    var modelToTest,
        testTitle1 = 'this is a test title',
        testTitle2 = 'this is a different test title';

    beforeEach(module('PageTitleModelModule'));

    beforeEach(inject(function (PageTitleModel) {
        modelToTest = PageTitleModel;
    }));

    describe('title setter', function () {
        it('is passed correct value', function () {
            spyOn(modelToTest, 'setTitle');
            modelToTest.setTitle(testTitle1);
            expect(modelToTest.setTitle).toHaveBeenCalledWith(testTitle1);
        });
    });

    describe('title getter', function () {
        it('should return empty array when no setter called', function () {
            expect(modelToTest.getTitle()).toEqual('');
        });

        it('should return parameters set', function () {
            modelToTest.setTitle(testTitle1);
            expect(modelToTest.getTitle()).toEqual(testTitle1);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setTitle(testTitle1);
            modelToTest.setTitle(testTitle2);
            expect(modelToTest.getTitle()).toEqual(testTitle2);
        });
    });
});
