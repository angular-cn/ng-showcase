'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.basic', function ($scope) {
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
  vm.value = vm.cities[1];
  vm.codeValue = 'gz';
  vm.groupedValue = 'sz';
  vm.trackValue = {code: 'gz', label: '羊城'};
});
