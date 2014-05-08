'use strict';

angular.module('ngShowcaseApp').controller('ctrl.tree.nav', function ($scope, NavData) {
  var vm = $scope.vm = {};
  vm.data = NavData;
});
