'use strict';

angular.module('ngShowcaseApp').controller('ctrl.form.basic', function ($scope) {
    var vm = $scope.vm = {
        show_error: true,
        show_type: 1
    };

    vm.js_submit = function () {
        vm.show_error = true;
    };

    vm.js_change_show_type = function (e) {
        if (vm.show_type == 3) {
            vm.show_error = false;
        } else {
            vm.show_error = true;
        }

    }
});
