'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.cascade', function ($scope) {
  var vm = $scope.vm = {};
  vm.countries = [
    {
      label: '中国',
      provinces: [
        {
          label: '北京',
          cities: [
            {
              label: '朝阳区'
            },
            {
              label: '宣武区'
            },
            {
              label: '海淀区'
            }
          ]
        },
        {
          label: '河北',
          cities: [
            {
              label: '石家庄'
            },
            {
              label: '承德'
            },
            {
              label: '唐山'
            }
          ]
        }
      ]
    },
    {
      label: '美国',
      provinces: [
        {
          label: '纽约',
          cities: [
            {
              label: '曼哈顿区'
            },
            {
              label: '皇后区'
            }
          ]
        },
        {
          label: '德克萨斯州',
          cities: [
            {
              label: '休斯顿'
            },
            {
              label: '达拉斯'
            }
          ]
        },
        {
          label: '加利福尼亚州'
        }
      ]
    }
  ];
  // 更换国家的时候清空省
  $scope.$watch('vm.country', function(country) {
    vm.province = null;
  });
  // 更换省的时候清空城市
  $scope.$watch('vm.province', function(province) {
    vm.city = null;
  });
});
