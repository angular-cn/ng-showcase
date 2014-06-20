'use strict';

/**
 * 支持查看源代码的指令，此版本只能配合ui-router使用
 * 原理：
 * 拦截路由变化的事件，并且根据route中的template或templateUrl参数获得view的源代码。
 * 根据控制器名称和相应的规约获得动态取得controller的源代码。
 */
angular.module('ngShowcaseApp').directive('appViewSource', function($rootScope, $templateCache, $http) {
  var getFileType = function(url) {
    var match = url.match(/\.(\w+)$/);
    if (match) {
      return match[1];
    } else {
      return ''
    }
  };
  var getFileName = function(url) {
    var match = url.match(/\/([.\w-]+)$/);
    if (match) {
      return match[1];
    } else {
      return ''
    }
  };
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'views/home/viewSource.html',
    link: function(scope, element, attrs) {
      var vm = scope.vm = {};
      var activeFile = 1;
      vm.isActive = function(file) {
        return file.id === activeFile;
      };
      vm.setActive = function(file) {
        activeFile = file.id;
      };
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // 初始化，以免有残留。
        var index = 0;
        activeFile = 1;
        var mainHtml = {
          id: ++index,
          type: 'html',
          name: 'HTML',
          description: '主模板的HTML文件',
          source: $templateCache.get(toState.templateUrl)[1]
        };
        var mainJs = {
          id: ++index,
          type: 'js',
          name: 'JS',
          description: '主控制器的JS文件',
          source: ''
        };
        var mainCss = {
          id: ++index,
          type: 'css',
          name: 'CSS',
          description: '主模板的CSS文件',
          source: ''
        };
        vm.files = [
          mainHtml,
          mainJs,
          mainCss
        ];
        var cssFile = toState.templateUrl.replace(/.html?$/, '.css');
        $http.get(cssFile).success(function(data) {
          mainCss.source = data;
        });
        var fileName = toState.controller.replace(/^ctrl\./, '').replace(/\./g, '/') + '.js';
        $http.get("scripts/controllers/" + fileName).success(function(data) {
          mainJs.source = data;
        });
        _.each(toState.files, function(description, file) {
          $http.get(file).success(function(data) {
            vm.files.push({
              id: ++index,
              type: getFileType(file),
              name: getFileName(file),
              description: description,
              source: data
            });
          });
        });
      });
    }
  }
});
