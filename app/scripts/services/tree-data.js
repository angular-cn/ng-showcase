'use strict';

/**
 * 能够自动处理树形数据联动的类，子节点列表必须命名为items。同时
 * @example
 * var data = new TreeData([
 *   {
 *     label: 'a',
 *     items: [
 *       {
 *         label: 'a1'
 *       },
 *       {
 *         label: 'a2'
 *       }
 *     ]
 *   },
 *   {
 *     label: 'b',
 *     items: [
 *       {
 *         label: 'b1'
 *       },
 *       {
 *         label: 'b2'
 *       }
 *     ]
 *   }
 * ]);
 */
angular.module('ng-ui', []).factory('TreeData', function($rootScope) {
  return function TreeData(tree) {
    this.tree = tree;

  }
});