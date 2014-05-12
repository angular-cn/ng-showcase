'use strict';

angular.module('ngShowcaseApp').constant('CityData', [
  {
    label: '中国',
    flag: 'cn.png',
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
    flag: 'us.png',
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
]);