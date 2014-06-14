'use strict';

/**
 * 查看当前功能的作者和实现状态
 * 原理：
 * 拦截路由变化的事件，从状态参数中取作者和进度信息
 */
angular.module('ngShowcaseApp').directive('appViewStatus', function($rootScope, $templateCache, $http, authors) {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'views/home/viewStatus.html',
    link: function(scope, element, attrs) {
      var vm = scope.vm = {};
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        vm.authors = _.map(toState.authors, function(name) {
          return _.findWhere(authors, {name: name});
        });
        vm.progress = toState.progress;
      });
    }
  }
});
