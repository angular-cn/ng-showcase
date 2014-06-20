'use strict';

angular.module('ngShowcaseApp').controller('ctrl.stat.chart', function ($scope) {
  var vm = $scope.vm = {};
  vm.chart = undefined;
  vm.setTitle = function(title) {
    vm.chart.xAxis[0].setTitle({text: title});
  };
  vm.config = {
    chart: {
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      height: 400,
//      plotBorderWidth: 1,
      type: 'line'
    },
    title: {
      text: '月平均气温'
    },
    subtitle: {
      text: '来源: WorldClimate.com'
    },
    xAxis: {
      title: {
        text: '月份'
      },
      categories: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    },
    yAxis: {
      title: {
        text: '温度(°C)'
      }
    },
    tooltip: {
      enabled: true,
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br>'+this.x +': '+ this.y +'°C';
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: '东京',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: '伦敦',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  };
});
