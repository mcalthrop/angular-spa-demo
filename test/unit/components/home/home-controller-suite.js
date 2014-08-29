/* global describe, beforeEach, module, inject, jasmine, it, expect, spyOn */

describe('Testing HomeController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        menuMainModel,
        mockHomeDataService,
        mockHomeDataJson,
        mockHomeWrapperService,
        mockHomeWrapperJson,
        mockHomeModel,
        mockPageTitleModel,
        mockPageHeaderModel;

    beforeEach(module('HomeControllerModule', 'MenuMainModelModule', 'MockHomeDataJsonModule', 'MockHomeWrapperJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, MenuMainModel, _MockHomeDataJson_, _MockHomeWrapperJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        menuMainModel = MenuMainModel;

        mockHomeDataJson = _MockHomeDataJson_;
        mockHomeDataService = jasmine.createSpyObj('mockHomeDataService', ['query']);
        mockHomeDataService.query.andCallFake(function (fn) {
            fn(mockHomeDataJson);
        });

        mockHomeWrapperJson = _MockHomeWrapperJson_;
        mockHomeWrapperService = jasmine.createSpyObj('mockHomeWrapperService', ['query']);
        mockHomeWrapperService.query.andCallFake(function (fn) {
            fn(mockHomeWrapperJson);
        });

        mockHomeModel = jasmine.createSpyObj(
            'mockHomeModel',
            ['setMarkdownParagraphs', 'getMarkdownParagraphs']
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

        controllerToTest = $controller('HomeController', {
            $scope: $scope,
            MenuMainModel: menuMainModel,
            HomeDataService: mockHomeDataService,
            HomeWrapperService: mockHomeWrapperService,
            HomeModel: mockHomeModel,
            PageTitleModel: mockPageTitleModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set homeModel correctly on $scope', function () {
        expect($scope.homeModel).toBe(mockHomeModel);
    });

    it('should set current menu item id correctly', function () {
        expect(menuMainModel.setCurrentMenuItemId).toHaveBeenCalledWith(menuMainModel.HOME);
    });

    describe('Home data service:', function () {
        it('should call data service', function () {
            expect(mockHomeDataService.query).toHaveBeenCalled();
        });

        it('should call setMarkdownParagraphs()', function () {
            expect(mockHomeModel.setMarkdownParagraphs).toHaveBeenCalled();
        });

        it('should call setMarkdownParagraphs() with correct parameters', function () {
            var mostRecentCallArgs = mockHomeModel.setMarkdownParagraphs.mostRecentCall.args;

            for (var i = 0, len = mockHomeDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockHomeDataJson[i]);
            }
        });
    });

    describe('Home wrapper service:', function () {
        it('should call wrapper service', function () {
            expect(mockHomeWrapperService.query).toHaveBeenCalled();
        });

        it('should call setTitle() on page title model', function () {
            expect(mockPageTitleModel.setTitle).toHaveBeenCalled();
        });

        it('should call setTitle() on page header model', function () {
            expect(mockPageHeaderModel.setTitle).toHaveBeenCalled();
        });

        it('should call setMarkdownParagraphs() on page header model', function () {
            expect(mockPageHeaderModel.setParagraphs).toHaveBeenCalled();
        });
    });
});
