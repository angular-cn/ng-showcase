'use strict';

angular.module('scHelper').directive('scHighchart', function() {
  return {
    restrict: 'EA',
    scope: {
      config: '='
    },
    require: 'ngModel',
    link: function($scope, $element, attrs, ngModel) {
      // 强制指定指令所在的元素为绘制目标
      var config = $scope.config;
      if (!config.chart) {
        config.chart = {}
      }
      config.chart.renderTo = $element[0];
      $element.css('display', 'block');
      var chart = new Highcharts.Chart($scope.config);
      ngModel.$setViewValue(chart);
      $scope.$watch('config.xAxis', function(value) {
        chart.redraw();
      }, true);
    }
  }
});
