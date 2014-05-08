(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules 
        //'ngRoute'           // routing
        'restangular'
    ]);

    app.config(['$locationProvider',
      function ($locationProvider) {
          $locationProvider.hashPrefix('!');
          /*$routeProvider.
            when('/', {
                templateUrl:  'SurveyResults/SurveyResults'
            });*/
      }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);

})();