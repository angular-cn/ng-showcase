'use strict';

/**
 * 取所属元素的大小
 */
angular.module('scHelper').directive('scResize', function($parse, $interval) {
  return {
    restrict: 'A',
    compile: function($element, attr) {
      var fn = $parse(attr['scResize']);
      return function(scope, element, attr) {
        var lastWidth = -1;
        var lastHeight = -1;
        // 定时检测宽高，如果变化了，就触发回调。这里不用$interval，是因为不想在检测时触发$apply，而应该在有变化时才触发
        // 不用担心定时监测算法的效率问题，取宽高的函数运行很快，在chrome中测试的结果是1毫秒内可以执行10次
        var id = setInterval(function() {
          var width = element.width();
          var height = element.height();
          if (width !== lastWidth || height !== lastHeight) {
            lastWidth = width;
            lastHeight = height;
            scope.$apply(function() {
              fn(scope, {width: width, height: height})
            });
          }
        }, 300);
        scope.$on('destroy', function() {
          clearInterval(id);
        });
      };
    }
  }
});
