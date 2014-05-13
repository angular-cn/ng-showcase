'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.custom', function ($scope) {
  var vm = $scope.vm = {};
  vm.provinces = [
    {
      label: '北京',
      cities: [
        {
          population: 1961.24,
          code: 'bj',
          label: '北京市'
        }
      ]
    },
    {
      label: '上海',
      cities: [
        {
          population: 2301.91,
          code: 'sh',
          label: '上海市'
        }
      ]
    },
    {
      label: '广东',
      cities: [
        {
          population: 1270.08,
          code: 'gz',
          label: '广州'
        },
        {
          population: 1035.79,
          code: 'sz',
          label: '深圳'
        }
      ]
    }
  ];
});
