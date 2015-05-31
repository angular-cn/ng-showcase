'use strict';

angular.module('ngShowcaseApp').controller('ctrl.animation.custom', function ($scope,$http,$timeout) {
  var vm = $scope.vm = {};
  $scope.choice = "";
  $scope.classname = "";
  $scope.choiceitems = {};
    $http({method: 'GET', url: 'scripts/controllers/animation/choiceitems.json',cache:true}).
    success(function(data, status, headers, config) {
     var choices = angular.fromJson(data);
  	  $scope.choiceitems = choices;

    }).
    error(function(data, status, headers, config) {
    	console.log(data);
    });
  $scope.change = function(){
  	  $scope.classname = $scope.choice+" "+"animated";  
  	  var timer = $timeout(function() {$scope.classname = "";$timeout.cancel(timer);},1500);
  };
});
