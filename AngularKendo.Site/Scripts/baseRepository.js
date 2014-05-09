(function () {
    'use strict';

    angular.module('app').factory('baseRepository', ['$http', baseRepository]);

    function baseRepository($http) {
        var self = {};

        self.getDataAsArray = function (url, parameters) {
            var returnArray = [];

            $http.get(url, { params: parameters }).then(function (result) {
                for (var i = 0; i < result.data.length; i++) {
                    returnArray.push(result.data[i]);
                }
            }, null);

            return returnArray;
        };

        return self;
    }
})();