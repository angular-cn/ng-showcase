'use strict';

angular.module('ngShowcaseApp').controller('ctrl.utils.zoom', function ($scope, Zoom) {
  var vm = $scope.vm = {};
  vm.zoom = new Zoom();
  vm.mask = {
    width: 0,
    height: 0
  };
  vm.full = {
    width: 0,
    height: 0
  };
  vm.onThumbMouseMove = function($event) {
    vm.thumb.x = $event.offsetX;
    vm.thumb.y = $event.offsetY;
    vm.full.x = vm.thumb.x * vm.full.width / vm.thumb.width;
    vm.full.y = vm.thumb.y * vm.full.height / vm.thumb.height;
  };
  vm.onThumbSize = function(width, height) {
    vm.thumb.width = width;
    vm.thumb.height = height;
  };
  vm.onMaskSize = function(width, height) {
    vm.mask.width = width;
    vm.mask.height = height;
  };
  vm.onFullSize = function(width, height) {
    vm.full.width = width;
    vm.full.height = height;
  };
});
