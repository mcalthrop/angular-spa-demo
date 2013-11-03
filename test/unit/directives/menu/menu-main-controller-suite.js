/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing MenuMainController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockMenuMainModel;

    beforeEach(module('MenuMainControllerModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockMenuMainModel = jasmine.createSpyObj('mockMenuMainModel', ['getMenuItems']);

        controllerToTest = $controller('MenuMainController', {
            $scope: $scope,
            MenuMainModel: mockMenuMainModel
        });
    }));

    it('should set aboutModel correctly on controller', function () {
        expect($scope.menuMainModel).toBe(mockMenuMainModel);
    });

});

/* EOF */