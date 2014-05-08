angular.module('ngShowcaseApp').config(function($stateProvider, $urlRouterProvider, NavData) {
  $urlRouterProvider.when('', '/home/main');
  $urlRouterProvider.when('/', '/home/main');
  $urlRouterProvider.otherwise('/notFound');
  $stateProvider.state('notFound', {
    url: '/notFound',
    controller: 'ctrl.notFound',
    templateUrl: 'views/home/notFound.html'
  });
  var states = [];
  // 把多级state弄成单级的，并自动补充父级路由，方便后续处理
  _.each(NavData, function(group) {
    _.each(group.items, function(item) {
      // 处理多级state，自动添加各个父级state
      var paths = item.state.split(/\./g);
      var currentPath = '';
      _.each(paths, function(path) {
        currentPath += path;
        states.push(currentPath);
        currentPath += '.'
      });
    });
  });
  // 去重，免得重新注册了路由
  states = _.unique(states);
  // 遵循约定优于配置的原则自动批量注册路由
  _.each(states, function(state) {
    var path = state.replace(/\./g, '/');
    var lastState = state.match(/(\w+)$/)[0];
    $stateProvider.state(state, {
      url: '/' + lastState,
      controller: 'ctrl.' + state,
      templateUrl: 'views/' + path + '.html'
    });
  });
});

/**
 * 支持查看源代码的通用功能
 * 原理：
 * 拦截路由变化的事件，并且根据route中的template或templateUrl参数获得view的源代码。
 * 根据控制器名称和相应的规约获得动态取得controller的源代码。
 */
angular.module('ngShowcaseApp').run(function($rootScope, $templateCache, $http) {
  $rootScope.sourceCode = {};
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.sourceCode.view = toState.template || $templateCache.get(toState.templateUrl)[1];
    var fileName = toState.controller.replace(/^ctrl\./, '').replace(/\./g, '/') + '.js';
    $http.get("scripts/controllers/" + fileName).success(function(data) {
      $rootScope.sourceCode.controller = data;
    });
  });
});