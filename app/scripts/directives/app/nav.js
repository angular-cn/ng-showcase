'use strict';

angular.module('ngShowcaseApp').directive('appNav', function(NavData) {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'views/home/nav.html',
    link: function(scope, element, attrs) {
      var vm = scope.vm = {};
      vm.data = NavData;
    }
  }
});