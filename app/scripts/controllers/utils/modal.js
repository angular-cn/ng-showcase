'use strict';

angular.module('ngShowcaseApp').controller('ctrl.utils.modal', function ($scope) {
  var vm = $scope.vm = {};

  vm.modal = {
    title: '标题',
    msg: 'Hello,这是一个由Bootstrap提供的模态框.'
  };
  
});