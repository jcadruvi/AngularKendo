(function () {
    'use strict';

    angular.module('app').directive('kendoDatePicker', kendoDatePicker);

    function kendoDatePicker() {
        var self = {};

        self.restrict = 'A';
        self.scope = {
            selectData: '=',
            onSelect: '=',
            value: '='
        };
        self.link = function (scope, element, attrs) {
            var data;
            $(element[0]).kendoDatePicker({
                change: function () {
                    if (scope.onSelect) {
                        scope.onSelect(scope.selectData, this.value());
                    }
                },
                format: 'MM/dd/yyyy',
                value: scope.value
            });
            data = $(element[0]).data('kendoDatePicker');
            scope.$watch('value', function () {
                if (scope.value) {
                    data.value(new Date(scope.value));
                }
            });
        };

        return self;
    }

})();