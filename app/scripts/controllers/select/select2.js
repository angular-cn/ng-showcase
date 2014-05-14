'use strict';

angular.module('ngShowcaseApp').controller('ctrl.select.select2', function ($scope) {
  var vm = $scope.vm = {};
  vm.option1 = {
    allowClear:true
  };
  vm.option2 = {
    'multiple': true,
    'simple_tags': true,
    'tags': ['tag1', 'tag2', 'tag3', 'tag4']
  };
});
