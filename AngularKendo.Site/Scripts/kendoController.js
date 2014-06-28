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

        $http.get('api/HomeApi/Priorities').success(function (result) {
            $scope.priorities = result;
        });
        $http.get('api/HomeApi/Users').success(function (result) {
            $scope.users = result;
        });
    }
})();