/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing PageTitleController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockPageTitleModel;

    beforeEach(module('PageTitleControllerModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockPageTitleModel = jasmine.createSpyObj('mockPageTitleModel', ['setTitle', 'getTitle']);

        controllerToTest = $controller('PageTitleController', {
            $scope: $scope,
            PageTitleModel: mockPageTitleModel
        });
    }));

    describe('PageTitle data:', function () {

        it('should set aboutModel correctly on controller', function () {
            expect($scope.pageTitleModel).toBe(mockPageTitleModel);
        });

    });

});

/* EOF */