(function () {
    'use strict';

    angular.module('app').directive('showDirective', ['$timeout', showDirective]);

    function showDirective($timeout) {
        var self = {};

        self.restrict = 'E';
        self.replace = true;
        self.scope = {
            data: '='
        };
        self.link = function (scope) {
            scope.$watch('data', function () {
                $timeout(function () {
                    console.log('show directive data', scope.data);
                });
            });
        };
        self.template = '<div>' +
            '<div>This is show directive.</div>' +
            '<div ng-repeat="d in data">' +
                '<div class="label">Priority:</div>' + 
                '<div>{{ d.Id }} - {{ d.Description }}</div>' + 
            '</div>' + 
            '</div>'

        return self;
    }

})();