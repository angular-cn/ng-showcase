'use strict';

/**
 * 可被递归的内容
 */
angular.module('scHelper').directive('scRecursion', function() {
  return {
    restrict: 'EA',
    scope: {
      value: '='
    },
    controller: function($scope) {

    },
    compile: function($element) {

    }
  }
});

/**
 * 递归展开指令，就地展开父级
 */
angular.module('scHelper').directive('scRecursive', function() {
  return {
    restrict: 'EA',
    require: '^scRecursion',
    scope: {
      value: '='
    },
    link: function($scope, $element, attrs, recursion) {

    }
  }
});