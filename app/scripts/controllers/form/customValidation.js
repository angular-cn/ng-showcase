'use strict';

angular.module('ngShowcaseApp')
    .controller('ctrl.form.customValidation', ['$scope', function ($scope) {
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
    }])
    .directive("multipleEmail", [function () {
        return {
            restrict: 'A',
            require: "ngModel",
            link: function (scope, element, attr, ctrl) {
               if (ctrl) {
                   var EMAILS_REGEXP = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
                   var customValidator = function (value) {
                        var validity = ctrl.$isEmpty(value) || EMAILS_REGEXP.test(value)
                        ctrl.$setValidity("multipleEmail", validity);
                        return validity ? value : undefined;
                    };
                    ctrl.$formatters.push(customValidator);
                    ctrl.$parsers.push(customValidator);
                }
            }
        };
    }]);
