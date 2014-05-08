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

        $scope.service = service;

        $scope.data = [
            { Id: '1', Description: 'Test' },
            { Id: '2', Description: 'Bext' }
        ];

        //$http.get('api/HomeApi/Priorities').then(function (result) {
        //    $scope.priorities = result.data;
        //});
        //$http.get('api/HomeApi/Users').then(function (result) {
        //    $scope.users = result.data;
        //});
    }
})();