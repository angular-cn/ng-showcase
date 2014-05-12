'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.cascade', function ($scope, CityData) {
  var vm = $scope.vm = {};
  vm.countries = CityData;
  // 更换国家的时候清空省
  $scope.$watch('vm.country', function(country) {
    vm.province = null;
  });
  // 更换省的时候清空城市
  $scope.$watch('vm.province', function(province) {
    vm.city = null;
  });
});
