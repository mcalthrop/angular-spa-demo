/* global describe, describe, beforeEach, module, inject, jasmine, it, expect, spyOn */

describe('Testing ProfilesController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        menuMainModel,
        mockProfilesDataService,
        mockProfilesDataJson,
        mockProfilesWrapperService,
        mockProfilesWrapperJson,
        mockProfilesModel,
        mockPageTitleModel,
        mockPageHeaderModel;

    beforeEach(module('ProfilesControllerModule', 'MenuMainModelModule', 'MockProfilesDataJsonModule', 'MockProfilesWrapperJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, MenuMainModel, _MockProfilesDataJson_, _MockProfilesWrapperJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        menuMainModel = MenuMainModel;

        mockProfilesDataJson = _MockProfilesDataJson_;
        mockProfilesDataService = jasmine.createSpyObj('mockProfilesDataService', ['query']);
        mockProfilesDataService.query.andCallFake(function (fn) {
            fn(mockProfilesDataJson);
        });

        mockProfilesWrapperJson = _MockProfilesWrapperJson_;
        mockProfilesWrapperService = jasmine.createSpyObj('mockProfilesWrapperService', ['query']);
        mockProfilesWrapperService.query.andCallFake(function (fn) {
            fn(mockProfilesWrapperJson);
        });

        mockProfilesModel = jasmine.createSpyObj(
            'mockProfilesModel',
            ['setProfiles', 'getProfiles']
        );
        mockPageTitleModel = jasmine.createSpyObj(
            'mockPageTitleModel',
            ['setTitle', 'getTitle']
        );
        mockPageHeaderModel = jasmine.createSpyObj(
            'mockPageHeaderModel',
            ['setTitle', 'getTitle', 'setParagraphs', 'getParagraphs']
        );

        spyOn(menuMainModel, 'setCurrentMenuItemId');

        controllerToTest = $controller('ProfilesController', {
            $scope: $scope,
            MenuMainModel: menuMainModel,
            ProfilesDataService: mockProfilesDataService,
            ProfilesWrapperService: mockProfilesWrapperService,
            ProfilesModel: mockProfilesModel,
            PageTitleModel: mockPageTitleModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set profilesModel correctly on $scope', function () {
        expect($scope.profilesModel).toBe(mockProfilesModel);
    });

    it('should set current menu item id correctly', function () {
        expect(menuMainModel.setCurrentMenuItemId).toHaveBeenCalledWith(menuMainModel.PROFILES);
    });

    describe('Profiles data service:', function () {
        it('should call data service', function () {
            expect(mockProfilesDataService.query).toHaveBeenCalled();
        });

        it('should call setProfiles()', function () {
            expect(mockProfilesModel.setProfiles).toHaveBeenCalled();
        });

        it('should call setProfiles() with correct parameters', function () {
            var mostRecentCallArgs = mockProfilesModel.setProfiles.mostRecentCall.args;

            for (var i = 0, len = mockProfilesDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockProfilesDataJson[i]);
            }
        });
    });

    describe('Profiles wrapper service:', function () {
        it('should call wrapper service', function () {
            expect(mockProfilesWrapperService.query).toHaveBeenCalled();
        });

        it('should call setTitle() on page title model', function () {
            expect(mockPageTitleModel.setTitle).toHaveBeenCalled();
        });

        it('should call setTitle() on page header model', function () {
            expect(mockPageHeaderModel.setTitle).toHaveBeenCalled();
        });

        it('should call setParagraphs() on page header model', function () {
            expect(mockPageHeaderModel.setParagraphs).toHaveBeenCalled();
        });
    });
});
