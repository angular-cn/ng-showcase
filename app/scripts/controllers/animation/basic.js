'use strict';

angular.module('ngShowcaseApp').controller('ctrl.animation.basic', function ($scope) {
  var vm = $scope.vm = {};

  vm.items = ['item1', 'item2'];
  vm.itemId = 3;

  vm.addItem = function() {
    vm.items.push('item' + vm.itemId);
    vm.itemId++;
  };

  vm.delItem = function(index) {
    vm.items.splice(index, 1);
  };
});