'use strict';

angular.module('ngShowcaseApp').controller('ctrl.show.alert', function ($scope) {
  var vm = $scope.vm = {};
  //警告类型
  vm.types = [
    'alert-success',
    'alert-info',
    'alert-warning',
    'alert-danger'
  ];

  vm.alerts = [
    {type:'alert-success',msg:'操作成功,请继续下一步!'},
    {type:'alert-danger',msg:'提交失败,修改内容并尝试重新提交!'},
  ];
  //删除单条警告
  vm.closeAlert = function (index) {
    vm.alerts.splice(index, 1);
  };
  //添加新警告
  vm.addAlert = function (type, msg) {
    if (type === undefined || msg === undefined) {
      vm.alerts.push({
        type:'alert-warning',
        msg:'类型和内容不能为空.'
      });
    } else {
      vm.alerts.push({
        type:type,
        msg:msg
      });
    } 
  };

});
