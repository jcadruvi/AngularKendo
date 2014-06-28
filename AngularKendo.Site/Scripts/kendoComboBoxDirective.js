(function () {
    'use strict';

    angular.module('app').directive('kendoComboBox', kendoComboBox);

    function kendoComboBox() {
        var self = {};

        self.restrict = 'A';
        self.scope = {
            data: '=',
            text: '=',
            value: '=',
        };

        self.link = function (scope, element, attrs) {
            var data,
                dataTextField = 'Description',
                dataValueField = 'Id';

            $(element[0]).kendoComboBox({
                change: function () {
                    scope.text = this.text();
                    scope.value = this.value();
                    scope.$apply();
                },
                dataTextField: dataTextField,
                dataValueField: dataValueField,
                dataSource: {
                    data: scope.data
                },
                filter: "contains",
                suggest: true,
                value: scope.value
            });
            data = $(element[0]).data('kendoComboBox');
            scope.$watch('data', function () {
                if (scope.data && scope.data.length > 0) {
                    data.dataSource.data(scope.data);
                    data.value(scope.value);
                }
            });
            scope.$watch('value', function () {
                if (scope.data && scope.data.length > 0) {
                    data.value(scope.value);
                }
            });
            if (scope.width) {
                width = scope.width;
                $(element[0]).closest(".k-widget").find(".k-dropdown-wrap").css("width", width);
                $(element[0]).closest(".k-widget").css("width", width);
            }
        };

        return self;
    }

})();