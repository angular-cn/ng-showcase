'use strict';

/**
 * 设置所属元素的位置
 */
angular.module('scHelper').directive('scPosition', function() {
  return {
    restrict: 'A',
    scope: {
      rect: '=scPosition',
      left: '=scLeft',
      top: '=scTop',
      right: '=scRight',
      bottom: '=scBottom',
      width: '=scWidth',
      height: '=scHeight'
    },
    link: function($scope, $element) {
      $scope.$watch('left', function(value) {
        if (value !== undefined)
          $element.css('left', value)
      });
      $scope.$watch('top', function(value) {
        if (value !== undefined)
          $element.css('top', value)
      });
      $scope.$watch('right', function(value) {
        if (value !== undefined)
          $element.css('right', value)
      });
      $scope.$watch('bottom', function(value) {
        if (value !== undefined)
          $element.css('bottom', value)
      });
      $scope.$watch('width', function(value) {
        if (value !== undefined)
          $element.width(value)
      });
      $scope.$watch('height', function(value) {
        if (value !== undefined)
          $element.height(value)
      });
      $scope.$watch('rect', function(value) {
        if (value !== undefined) {
          if (value.x !== undefined)
            $element.css('left', value.x);
          if (value.y !== undefined)
            $element.css('top', value.y);
          if (value.width !== undefined)
            $element.width(value.width);
          if (value.height !== undefined)
            $element.height(value.height);
        }
      }, true);
    }
  }
});