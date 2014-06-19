'use strict';

angular.module('scHelper').factory('Rect', function() {
  function Rect() {
    var width = 0;
    var height = 0;
    var x = 0;
    var y = 0;
    this.x = function() {
      return x;
    };
    this.setX = function(value) {
      x = value;
    };
    this.y = function() {
      return y;
    };
    this.setY = function(value) {
      y = value;
    };
    this.width = function() {
      return width;
    };
    this.setWidth = function(value) {
      width = value;
    };
    this.height = function() {
      return height;
    };
    this.setHeight = function(value) {
      height = value;
    };
    this.resize = function(width, height) {
      this.setWidth(width);
      this.setHeight(height);
    };
    this.moveTo = function(x, y) {
      this.setX(x);
      this.setY(y);
    };
    //* 根据当前长宽把矩形中心点定位于(x, y)
    this.centerTo = function(x, y) {
      this.moveTo(x - this.width() / 2, y - this.height() / 2)
    };
  }
  return Rect;
});
angular.module('scHelper').factory('Zoom', function(Rect) {
  function Zoom() {
    this.small = new Rect();
    this.mask = new Rect();
    this.large = new Rect();
  }
  return Zoom;
});