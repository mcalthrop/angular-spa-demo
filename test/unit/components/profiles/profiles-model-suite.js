/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing ProfilesModel:', function () {
    'use strict';

    var modelToTest,
        mockProfilesDataJson1,
        mockProfilesDataJson2;

    beforeEach(module('ProfilesModelModule', 'MockProfilesDataJsonModule'));

    beforeEach(inject(function (ProfilesModel, _MockProfilesDataJson_) {
        modelToTest = ProfilesModel;

        mockProfilesDataJson1 = _MockProfilesDataJson_.set1;
        mockProfilesDataJson2 = _MockProfilesDataJson_.set2;
    }));

    describe('profiles setter', function () {
        it('is passed correct value', function () {
            spyOn(modelToTest, 'setProfiles');
            modelToTest.setProfiles(mockProfilesDataJson1);
            expect(modelToTest.setProfiles).toHaveBeenCalledWith(mockProfilesDataJson1);
        });

        it('should get the correct number of profiles', function () {
            spyOn(modelToTest, 'setProfiles');
            modelToTest.setProfiles(mockProfilesDataJson1);
            expect(modelToTest.setProfiles.mostRecentCall.args[0].length).toEqual(mockProfilesDataJson1.length);
        });
    });

    describe('profiles getter', function () {
        it('should return empty array when no setter called', function () {
            expect(modelToTest.getProfiles()).toEqual([]);
        });

        it('should return parameters set', function () {
            modelToTest.setProfiles(mockProfilesDataJson1);
            expect(modelToTest.getProfiles()).toEqual(mockProfilesDataJson1);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setProfiles(mockProfilesDataJson1);
            modelToTest.setProfiles(mockProfilesDataJson2);
            expect(modelToTest.getProfiles()).toEqual(mockProfilesDataJson2);
        });
    });
});
