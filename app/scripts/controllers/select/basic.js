'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.basic', function ($scope) {
  var vm = $scope.vm = {};
  vm.cities = [
    {
      code: 'bj',
      label: '北京'
    },
    {
      code: 'sh',
      label: '上海'
    },
    {
      code: 'gz',
      label: '广州'
    }
  ];
  vm.value = vm.cities[1];
  vm.codeValue = 'gz';
  vm.trackValue = {code: 'gz', label: '羊城'};
});
