'use strict';

angular.module('ngShowcaseApp').controller('ctrl.integrated.cart', function ($scope) {
  var vm = $scope.vm = {};
  vm.items = [
    {
      code: '10001',
      label: '苹果手机',
      description: '苹果5S，最新款，最精致的手机',
      price: '5000',
      thumbnail: 'sj.jpg'
    },
    {
      code: '20001',
      label: '美的电磁炉',
      description: '美的出产的电磁炉，配合苹果手机使用效果更佳',
      price: '1000',
      thumbnail: 'dcl.jpg'
    }
  ];
  vm.cart = {
    label: '张三的购物车',
    lines: []
  };
  vm.addToCart = function addToCart(item) {
    if (!item.code)
      return;
    var line = _.findWhere(vm.cart.lines, {code: item.code});
    if (!line) {
      line = _.extend({}, item, {quantity: 1});
      vm.cart.lines.push(line);
    } else {
      ++line.quantity;
    }
  };
  vm.cartCount = function() {
    return _.reduce(vm.cart.lines, function(memo, line) {return memo + line.quantity}, 0);
  };
  vm.cartTotal = function() {
    return _.reduce(vm.cart.lines, function(memo, line) {return memo + line.price * line.quantity}, 0);
  };
  vm.incrementQuantity = function(line) {
    line.quantity++;
  };
  vm.decrementQuantity = function(line) {
    if (line.quantity <= 0)
      return;
    --line.quantity
  };
  vm.removeFromCart = function(line) {
    vm.cart.lines = _.reject(vm.cart.lines, function(item){ return line.code === item.code});
  };
  vm.buy = function buy(item) {
    if (!item.code)
      return;
    vm.cart.lines = [_.extend({}, item, {quantity: 1})];
  };
});
