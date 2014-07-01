'use strict';

angular.module('ngShowcaseApp').controller('ctrl.utils.zoom', function ($scope, Zoom) {
  var vm = $scope.vm = {};
  vm.zoom = new Zoom();
  vm.zoom1 = new Zoom();
  vm.zoom3 = new Zoom();
});
