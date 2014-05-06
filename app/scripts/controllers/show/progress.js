'use strict';

angular.module('ngShowcaseApp').controller('ctrl.show.progress', function ($scope) {
  var vm = $scope.vm = {};
  vm.value = 50;
  vm.style = 'progress-bar-info';
  vm.showLabel = true;
});
