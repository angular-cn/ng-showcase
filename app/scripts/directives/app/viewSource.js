'use strict';

/**
 * 支持查看源代码的指令，此版本只能配合ui-router使用
 * 原理：
 * 拦截路由变化的事件，并且根据route中的template或templateUrl参数获得view的源代码。
 * 根据控制器名称和相应的规约获得动态取得controller的源代码。
 */
angular.module('ngShowcaseApp').directive('appViewSource', function($rootScope, $templateCache, $http) {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'views/home/viewSource.html',
    link: function(scope, element, attrs) {
      var vm = scope.vm = {};
      vm.activePage = 'html';
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // 初始化，以免有残留。
        vm.css = '';
        vm.controller = '';
        vm.view = $templateCache.get(toState.templateUrl)[1];
        var cssFile = toState.templateUrl.replace(/.html?$/, '.css');
        $http.get(cssFile).success(function(data) {
          vm.css = data;
        });
        var fileName = toState.controller.replace(/^ctrl\./, '').replace(/\./g, '/') + '.js';
        $http.get("scripts/controllers/" + fileName).success(function(data) {
          vm.controller = data;
        });
      });
    }
  }
});
