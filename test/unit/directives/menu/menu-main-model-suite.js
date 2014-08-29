/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing MenuMainModel:', function () {
    'use strict';

    var modelToTest;

    beforeEach(module('MenuMainModelModule'));

    beforeEach(inject(function (MenuMainModel) {
        modelToTest = MenuMainModel;
    }));

    describe('current menu item id setter', function () {
        it('is passed correct value', function () {
            var testMenuItemId = modelToTest.ABOUT;

            spyOn(modelToTest, 'setCurrentMenuItemId');
            modelToTest.setCurrentMenuItemId(testMenuItemId);
            expect(modelToTest.setCurrentMenuItemId).toHaveBeenCalledWith(testMenuItemId);
        });
    });

    describe('current menu item id getter', function () {
        it('gets correct value on first call', function () {
            var expectedMenuItemId = modelToTest.HOME;

            expect(modelToTest.getCurrentMenuItemId()).toEqual(expectedMenuItemId);
        });

        it('gets correct value after single call to setter', function () {
            var newMenuItemId = modelToTest.ABOUT,
                expectedMenuItemId = newMenuItemId;

            modelToTest.setCurrentMenuItemId(newMenuItemId);
            expect(modelToTest.getCurrentMenuItemId()).toEqual(expectedMenuItemId);
        });

        it('gets correct value after multiple calls to setter', function () {
            var newMenuItemId1 = modelToTest.ABOUT,
                newMenuItemId2 = modelToTest.PROFILES,
                newMenuItemId3 = modelToTest.RESOURCES,
                expectedMenuItemId = newMenuItemId3;

            modelToTest.setCurrentMenuItemId(newMenuItemId1);
            modelToTest.setCurrentMenuItemId(newMenuItemId2);
            modelToTest.setCurrentMenuItemId(newMenuItemId3);
            expect(modelToTest.getCurrentMenuItemId()).toEqual(expectedMenuItemId);
        });
    });
});
