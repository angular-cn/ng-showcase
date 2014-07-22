'use strict';

angular.module('ngShowcaseApp')
    .controller('ctrl.form.remoteValidation', function ($scope) {
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
    .directive("remoteUniqueCheck", ['$timeout', '$http',
        function ($timeout, $http) {
            return {
                require: "ngModel",
                link   : function (scope, elem, attrs, ngModel) {

                    //ngModel.$setValidity('romoteuniquecheck', false);
                    var doValidate = function () {
                        var attValues = scope.$eval(attrs.remoteUniqueCheck);
                        var url = attValues.url;
                        var isExists = attValues.isExists; //default is true
                        $http.get(url).success(function (result, status, headers, config) {
                            if (status === 200) {
                                if (isExists === false) {
                                    ngModel.$setValidity('romoteuniquecheck', result.data);
                                } else {
                                    ngModel.$setValidity('romoteuniquecheck', !result.data);
                                }

                            } else {
                                ngModel.$setValidity('romoteuniquecheck', false);
                            }

                        });
                    };

                    scope.$watch(attrs.ngModel, function (newValue) {
                        if (_.isEmpty(newValue)) {
                        } else if (!scope[elem[0].form.name][elem[0].name].$dirty) {
                            doValidate();
                        }
                    });

                    elem.bind("blur", function () {
                        $timeout(function () {
                            if (scope[elem[0].form.name][elem[0].name].$invalid) {
                                return;
                            }
                            doValidate();
                        });
                    });
                    elem.bind("focus", function () {
                        $timeout(function () {
                            ngModel.$setValidity('romoteuniquecheck', true);
                        });
                    });
                }
            };
        }
    ]);
