(function () {
    'use strict';

    angular.module('app').controller('kendoController',
        ['$scope', '$http', kendoController]);

    function kendoController($scope, $http) {
        $http.get('api/HomeApi/Priorities').then(function (result) {
            $scope.priorities = result.data;
        });
        $http.get('api/HomeApi/Users').then(function (result) {
            $scope.users = result.data;
        });
    }
})();