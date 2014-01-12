(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules 
        //'ngRoute'           // routing
    ]);

    app.config(['$locationProvider', '$routeProvider',
      function ($locationProvider, $routeProvider) {
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