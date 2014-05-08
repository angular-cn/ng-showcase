'use strict';

angular.module('ngShowcaseApp').controller('ctrl.tree.basic', function ($scope, CityData) {
  var vm = $scope.vm = {};
  vm.countries = CityData;
  vm.select = function(country, province, city) {
    vm.country = country;
    vm.province = province;
    vm.city = city;
  };
});
