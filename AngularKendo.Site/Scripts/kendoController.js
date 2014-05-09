(function () {
    'use strict';

    angular.module('app').controller('kendoController',
        ['$scope', '$http', 'baseRepository', kendoController]);

    function kendoController($scope, $http, baseRepository) {

        $scope.endDate;
        $scope.priorityText;
        $scope.priorityValue;
        $scope.startDate;
        $scope.userText;
        $scope.userValue;

        var service = {};

        service.priorities = baseRepository.getDataAsArray('api/HomeApi/Priorities');
        $scope.users = baseRepository.getDataAsArray('api/HomeApi/Users');

        $scope.service = service;
    }
})();