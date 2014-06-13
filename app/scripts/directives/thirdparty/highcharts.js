'use strict';

angular.module('ngShowcaseApp').directive('highchart', function() {
  return {
    restrict: 'EA',
    scope: {
      config: '='
    },
    link: function($scope, $element) {
      // 强制指定指令所在的元素为绘制目标
      angular.extend($scope.config, {
        chart: {
          renderTo: $element[0]
        }
      });
      $scope.config.chart.instance = new Highcharts.Chart($scope.config);
    }
  }
});