'use strict';

angular.module('ngShowcaseApp').controller('ctrl.form.basic', function ($scope) {
    var vm = $scope.vm = {
        show_error: false,
        show_type: 1,
        user: {}
    };

    vm.submit = function () {
        vm.show_error = true;
    };

    vm.change_show_type = function (form) {
        if (vm.show_type == 3) {
            vm.show_error = false;
        } else {
            vm.show_error = true;
        }

        // 重置表单
        vm.user = {};
        form.$setPristine();

    }
});
