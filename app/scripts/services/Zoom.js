'use strict';

angular.module('scHelper').factory('Zoom', function(Rect) {
  function Zoom() {
    var small = this.small = new Rect();
    var smallView = this.smallView = new Rect();
    var large = this.large = new Rect();
    var largeView = this.largeView = new Rect();
    // 根据三者的相对尺寸，把small中的坐标映射到large中的坐标
    var update = this.update = function() {
      var ratioX = large.width / small.width;
      var ratioY = large.height / small.height;
      large.moveTo(-smallView.x * ratioX, -smallView.y * ratioY);
    };
    this.resize = function() {
      smallView.limitTo({left: 0, top: 0, right: small.width, bottom: small.height});
      var ratioX = large.width / small.width;
      var ratioY = large.height / small.height;
      smallView.resize(largeView.width / ratioX, largeView.height / ratioY);
      update();
    };
    largeView.onResize = small.onResize = large.onResize = this.resize;
    smallView.onResize = smallView.onMove = this.update;
  }
  return Zoom;
});