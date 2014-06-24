'use strict';

/**
 * 掩码输入框，仿jquery.inputmask
 */
angular.module('scHelper').directive('scMasked', function() {
  function parseByMask(value, mask) {
    return value;//.toUpperCase();
  }
  function formatByMask(value, mask) {
    return value.replace(mask, function(v1, v2) {
      debugger
    });
  }
  return {
    restrict: 'A',
    scope: {
      mask: '=scMasked'
    },
    require: 'ngModel',
    link: function($scope, $element, attrs, ngModel) {
      var mask = attrs['scMasked'];
      var regexp = mask.replace(/9/g, '(\\d)');
      ngModel.$viewValue = regexp;
      // 不管怎么显示，总是净化之后发给ng-model
      ngModel.$parsers.push(function(value) {
        if (angular.isUndefined(value))
          return value;
        return parseByMask(value, regexp);
      });
      ngModel.$formatters.push(function(value) {
        return formatByMask(value, regexp);
      });
      // ngModel变化的时候立刻更新value属性
      ngModel.$viewChangeListeners.push(function() {
        var input = $element[0];
        // 保存光标位置
        var start = input.selectionStart;
        var end = input.selectionEnd;
        $element.val(formatByMask(ngModel.$viewValue, regexp));
        // 恢复光标位置
        input.selectionStart = start;
        input.selectionEnd = end;
      });
    }
  }
});