'use strict';

angular.module('ngShowcaseApp').controller('ctrl.tree.treeData', function ($scope, TreeData) {
  var vm = $scope.vm = {};

  vm.countries = [
    {
      label: '中国',
      flag: 'cn.png',
      items: [
        {
          label: '北京',
          items: [
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
          items: [
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
      flag: 'us.png',
      items: [
        {
          label: '纽约',
          items: [
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
          items: [
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
  vm.tree = new TreeData(vm.countries);
});
