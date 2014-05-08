(function () {
    'use strict';

    angular.module('app').factory('baseRepository', ['$http', '$rootScope', '$timeout', 'Restangular', baseRepository]);

    function baseRepository($http, $rootScope, $timeout, Restangular) {
        var self = {};

        self.getDataAsArray = function (url, parameters) {
            var returnArray = [];

            //return Restangular.all(url).getList().$object

            $http.get(url, { params: parameters }).then(function (result) {
                //$timeout(function () {
                    for (var i = 0; i < result.data.length; i++) {
                        returnArray.push(result.data[i]);
                    }
                //    $rootScope.$digest();
                //});
            }, null);

            return returnArray;
        };

        return self;
    }
})();