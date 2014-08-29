/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing PageHeaderController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockPageHeaderModel;

    beforeEach(module('PageHeaderControllerModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockPageHeaderModel = jasmine.createSpy('mockPageHeaderModel');

        controllerToTest = $controller('PageHeaderController', {
            $scope: $scope,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set model correctly on controller', function () {
        expect($scope.pageHeaderModel).toBe(mockPageHeaderModel);
    });
});
