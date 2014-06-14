'use strict';

angular.module('ngShowcaseApp').directive('appFooter', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/footer.html',
    link: function(scope, element, attrs) {}
  }
});