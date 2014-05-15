'use strict';

angular.module('ngShowcaseApp').controller('ctrl.tree.uiTree', function ($scope) {
  var vm = $scope.vm = {};
  $scope.treeData = {
    name: "Root",
    children: [
      {
        id: 1,
        name: "First Child",
        children: [
          {
            id: 11,
            name: "First Grandchild"
          },
          {
            id: 12,
            name: "Second Grandchild"
          }
        ]
      },
      {
        id: 2,
        name: "Second Child"
      }
    ]
  };
  $scope.drop = function (targetNode, sourceNode, sourceParentNode) {
    var children = sourceParentNode.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == sourceNode) {
        children.splice(i, 1);
        if (!targetNode.children) {
          targetNode.children = [];
        }
        targetNode.children.push(sourceNode);
        break;
      }
    }
  };
});
