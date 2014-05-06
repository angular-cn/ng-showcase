'use strict';

angular.module('ngShowcaseApp').directive('appHeader', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/header.html',
    link: function(scope, element, attrs) {
      var vm = scope.vm = {}
    }
  }
});