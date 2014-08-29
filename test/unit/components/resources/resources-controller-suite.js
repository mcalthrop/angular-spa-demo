/* global describe, beforeEach, module, inject, jasmine, it, expect, spyOn */

describe('Testing ResourcesController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        menuMainModel,
        mockResourcesDataService,
        mockResourcesDataJson,
        mockResourcesWrapperService,
        mockResourcesWrapperJson,
        mockResourcesModel,
        mockPageTitleModel,
        mockPageHeaderModel;

    beforeEach(module('ResourcesControllerModule', 'MenuMainModelModule', 'MockResourcesDataJsonModule', 'MockResourcesWrapperJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, MenuMainModel, _MockResourcesDataJson_, _MockResourcesWrapperJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        menuMainModel = MenuMainModel;

        mockResourcesDataJson = _MockResourcesDataJson_;
        mockResourcesDataService = jasmine.createSpyObj('mockResourcesDataService', ['query']);
        mockResourcesDataService.query.andCallFake(function (fn) {
            fn(mockResourcesDataJson);
        });

        mockResourcesWrapperJson = _MockResourcesWrapperJson_;
        mockResourcesWrapperService = jasmine.createSpyObj('mockResourcesWrapperService', ['query']);
        mockResourcesWrapperService.query.andCallFake(function (fn) {
            fn(mockResourcesWrapperJson);
        });

        mockResourcesModel = jasmine.createSpyObj(
            'mockResourcesModel',
            ['setParagraphs', 'getParagraphs']
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

        controllerToTest = $controller('ResourcesController', {
            $scope: $scope,
            MenuMainModel: menuMainModel,
            ResourcesDataService: mockResourcesDataService,
            ResourcesWrapperService: mockResourcesWrapperService,
            ResourcesModel: mockResourcesModel,
            PageTitleModel: mockPageTitleModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set resourcesModel correctly on $scope', function () {
        expect($scope.resourcesModel).toBe(mockResourcesModel);
    });

    it('should set current menu item id correctly', function () {
        expect(menuMainModel.setCurrentMenuItemId).toHaveBeenCalledWith(menuMainModel.RESOURCES);
    });

    describe('Resources data service:', function () {
        it('should call data service', function () {
            expect(mockResourcesDataService.query).toHaveBeenCalled();
        });

        it('should call setParagraphs()', function () {
            expect(mockResourcesModel.setParagraphs).toHaveBeenCalled();
        });

        it('should call setParagraphs() with correct parameters', function () {
            var mostRecentCallArgs = mockResourcesModel.setParagraphs.mostRecentCall.args;

            for (var i = 0, len = mockResourcesDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockResourcesDataJson[i]);
            }
        });
    });

    describe('Resources wrapper service:', function () {
        it('should call wrapper service', function () {
            expect(mockResourcesWrapperService.query).toHaveBeenCalled();
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
