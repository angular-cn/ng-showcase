'use strict';

angular.module('ngShowcaseApp')
    .controller('ctrl.form.dependency', function ($scope) {
        var vm = $scope.vm = {
            show_error: false,
            show_type: 1,
            user: {}
        };

        vm.submit = function (basic_form) {
            vm.show_error = true;
            basic_form.$setDirty();
            if (basic_form.$valid) {
                alert("提交成功！");
            }
        };

        vm.change_show_type = function (form) {
            if (vm.show_type == 2) {
                vm.show_error = true;
            } else {
                vm.show_error = false;
            }

            // 重置表单
            vm.user = {};
            form.$setPristine();

        }
    })
    .directive("repeat", [function () {
        return {
            restrict: 'A',
            require: "ngModel",
            link: function (scope, element, attr, ctrl) {
                if (ctrl) {
                    var otherInput = element.inheritedData("$formController")[attrs.repeat];

                    var repeatValidator = function (value) {
                        var validity = value === otherInput.$viewValue;
                        ctrl.$setValidity("repeat", validity);
                        return validity ? value : undefined;
                    };

                    ctrl.$parsers.push(repeatValidator);
                    ctrl.$formatters.push(repeatValidator);

                    otherInput.$parsers.push(function (value) {
                        ctrl.$setValidity("repeat", value === ctrl.$viewValue);
                        return value;
                    });
                }
            }
        };
    }]);
