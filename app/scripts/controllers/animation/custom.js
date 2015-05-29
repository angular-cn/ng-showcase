'use strict';

angular.module('ngShowcaseApp').controller('ctrl.animation.custom', function ($scope,$http) {
  var vm = $scope.vm = {};
  $scope.choice = "";
  $scope.classname = "";
  $scope.choiceitems = {};
  $scope.change = function(){
  	  $scope.classname = $scope.choice+" "+"animated";
  };
});
