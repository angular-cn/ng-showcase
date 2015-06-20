'use strict';

angular.module('ngShowcaseApp').value('animate_param', {
    opacity: "1",
    left: "0",
    top: "0",
    time: "1000"
});

angular.module('ngShowcaseApp').controller('ctrl.animation.custom', function($scope, $http, $timeout, animate_param) {
    var vm = $scope.vm = {};
    $scope.choice = "";
    $scope.classname = "";
    $scope.choiceitems = {};
    var vm = $scope.vm = {};
    vm.items = ['item1', 'item2'];
    vm.itemId = 3;
    // user.opacity = $scope.param_opacity;

    vm.addItem = function() {
        vm.items.push('item' + vm.itemId);
        vm.itemId++;
    };

    vm.delItem = function(index) {
        vm.items.splice(index, 1);
    };
    $http({
        method: 'GET',
        url: 'scripts/controllers/animation/choiceitems.json',
        cache: true
    }).
    success(function(data, status, headers, config) {
        var choices = angular.fromJson(data);
        $scope.choiceitems = choices;

    }).
    error(function(data, status, headers, config) {
        console.log(data);
    });
    $scope.change = function() {
        $scope.classname = $scope.choice + " " + "animated";
    };
    $scope.paramchange = function() {
        animate_param.opacity = $scope.param_opacity;
        animate_param.left = $scope.param_left;
        animate_param.top = $scope.param_top;
        animate_param.time = $scope.param_time;
    }
});




angular.module('ngShowcaseApp').animation('.list-group-item',
    function(animate_param) {
        return {
            enter: function(element, done) {
                console.log(animate_param);
                element.css('opacity', animate_param.opacity);
                element.css('left', animate_param.left + "px");
                element.css('top', animate_param.top + "px");
                jQuery(element).animate({
                    opacity: 1,
                    left: '0px',
                    top: '0px'
                }, (animate_param.time > 999) ? parseInt(animate_param.time) : 1000, done);
                return function(isCancelled) {
                    if (isCancelled) {
                        jQuery(element).stop();
                    }
                }
            },
            leave: function(element, done) {
                element.css('opacity', 1);
                jQuery(element).animate({
                    opacity: 0
                }, done);
                return function(isCancelled) {
                    if (isCancelled) {
                        jQuery(element).stop();
                    }
                }
            }
        };

    }
);


/*
myModule.animation('.repeated-item', function() {
  return {
    enter : function(element, done) {
      element.css('opacity',0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    leave : function(element, done) {
      element.css('opacity', 1);
      jQuery(element).animate({
        opacity: 0
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    move : function(element, done) {
      element.css('opacity', 0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },

    // you can also capture these animation events
    addClass : function(element, className, done) {},
    removeClass : function(element, className, done) {}
  }
});
*/
