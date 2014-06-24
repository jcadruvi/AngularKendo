(function () {
    'use strict';

    angular.module('app').controller('kendoController',
        ['$scope', '$http', kendoController]);

    function kendoController($scope, $http) {

        $scope.endDate;
        $scope.priorityText;
        $scope.priorityValue;
        $scope.startDate;
        $scope.userText;
        $scope.userValue;

        var service = {};

        $http.get('api/HomeApi/Priorities').success(function (result) {
            service.priorities = result;
        });
        $http.get('api/HomeApi/Users').success(function (result) {
            $scope.users = result;
        });
    }
})();