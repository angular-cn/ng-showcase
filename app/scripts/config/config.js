'use strict';

// 配置信息
angular.module('ngShowcaseApp').constant('config', {
    title: 'Angular范例程序'
}).run(function($rootScope, config){
    $rootScope.config = config;
});