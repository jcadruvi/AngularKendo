(function () {
    'use strict';

    angular.module('app').controller('Controller',
        ['$scope', 'kendoService', Controller]);

    function Controller($scope, kendoService) {
        $scope.service = kendoService;
    }
})();