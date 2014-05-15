'use strict';

angular.module('ngShowcaseApp').controller('ctrl.input.calendar', function ($scope) {
  var vm = $scope.vm = {};

  //初始化日期
   $scope.today = function() {
    $scope.vm.calendar = new Date();
  };
  $scope.today();

  //清除当前日期
  $scope.clear = function () {
    $scope.vm.calendar = null;
  };


  // 不允许选择周末
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  //最小日期开关
  $scope.toggleMin = function() {
    $scope.vm.minDate = $scope.vm.minDate ? null : new Date();
  };
  $scope.toggleMin();

  //弹出式日历触发函数
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.vm.opened = true;
  };

  //自定义选项
  $scope.vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    formatDayTitle: 'yyyy MMMM'
  };

  //输出格式控制,来源:官方date filter
  $scope.vm.formats = ['yyyy-MMMM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd', 'shortDate'];
  $scope.vm.format = $scope.vm.formats[1];
});
