'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.multiple', function ($scope) {
  var vm = $scope.vm = {};
  vm.cities = [
    {
      province: '北京',
      code: 'bj',
      label: '北京市'
    },
    {
      province: '上海',
      code: 'sh',
      label: '上海市'
    },
    {
      province: '广东',
      code: 'gz',
      label: '广州'
    },
    {
      province: '广东',
      code: 'sz',
      label: '深圳'
    }
  ];
  vm.selection = function() {
    return _.where(vm.cities, {checked: true});
  }
});
