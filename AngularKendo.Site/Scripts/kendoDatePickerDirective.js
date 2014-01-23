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
            var data;
            $(element[0]).kendoDatePicker({
                change: function () {
                    scope.value = this.value();
                    scope.$apply();
                },
                format: 'd'
            });
            data = $(element[0]).data('kendoDatePicker');
        };

        return self;
    }

})();