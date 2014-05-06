'use strict';

angular.module('ngShowcaseApp').controller('ctrl.notFound', function ($scope, $location) {
  var vm = $scope.vm = {};
  vm.url = $location.url
});
