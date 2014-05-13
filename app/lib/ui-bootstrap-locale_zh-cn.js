'use strict';

// 虽然这些config都是用constant方式声明的，但是它们的成员仍然是可以被修改的
angular.module('ngShowcaseApp').config(function(paginationConfig, pagerConfig) {
  paginationConfig.firstText = "首页";
  paginationConfig.previousText = '上页';
  paginationConfig.nextText = '下页';
  paginationConfig.lastText = '尾页';

  pagerConfig.previousText = "« 上页";
  pagerConfig.nextText = "下页 »";
});