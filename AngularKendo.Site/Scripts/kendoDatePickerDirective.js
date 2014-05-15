(function () {
    'use strict';

    angular.module('app').directive('kendoDatePicker', kendoDatePicker);

    function kendoDatePicker() {
        var self = {};

        self.restrict = 'A';
        self.scope = {
            value: '='
        };
        self.link = function (scope, element, attrs) {
            var $element = $(element[0]),
                data;
            $element.kendoDatePicker({
                change: function () {
                    scope.value = this.value();
                    scope.$apply();
                },
                format: 'd'
            });
            data = $element.data('kendoDatePicker');
            scope.$watch('value', function () {
                data.value(new Date(scope.value));
            });
        };

        return self;
    }

})();