(function () {
    'use strict';

    angular.module('app').directive('kendoComboBox', kendoComboBox);

    function kendoComboBox() {
        var self = {};

        self.restrict = 'A';
        self.scope = {
            selectData: '=',
            onSelect: '=',
            mData: '=',
            value: '=',
            width: '='
        };

        self.link = function (scope, element, attrs) {
            var data,
                dataTextField = 'Description',
                dataValueField = 'Id';

            $(element[0]).kendoComboBox({
                change: function () {
                    if (scope.onSelect) {
                        scope.onSelect(scope.selectData, this.value(), this.text());
                    }
                },
                dataTextField: dataTextField,
                dataValueField: dataValueField,
                dataSource: {
                    data: scope.mData
                },
                filter: "contains",
                suggest: true,
                value: scope.value
            });
            data = $(element[0]).data('kendoComboBox');
            scope.$watch('mData', function () {
                if (scope.mData && scope.mData.length > 0) {
                    data.dataSource.data(scope.mData);
                    data.value(scope.value);
                }
            });
            scope.$watch('value', function () {
                if (scope.mData && scope.mData.length > 0) {
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