'use strict';

angular.module('scHelper').factory('Rect', function() {
  function Rect() {
    var limit = this.limit = {};
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
    this.left = function() {
      return this.x;
    };
    this.right = function() {
      return this.x + this.width;
    };
    this.top = function() {
      return this.y;
    };
    this.bottom = function() {
      return this.y + this.height;
    };
    this.limitTo = function(limit) {
      this.limit.left = limit.left;
      this.limit.top = limit.top;
      this.limit.right = limit.right;
      this.limit.bottom = limit.bottom;
    };
    this.onResize = function() {};
    this.resize = function(width, height) {
      width = Math.round(width);
      height = Math.round(height);
      if (width === this.width && height === this.height) {
        return;
      }

      this.width = width;
      this.height = height;
      if (this.onResize) {
        this.onResize(width, height)
      }
    };
    this.onMove = function() {};
    this.moveTo = function(x, y) {
      x = Math.round(x);
      y = Math.round(y);
      if (x === this.x && y === this.y) {
        return;
      }
      if (limit.left !== undefined) {
        x = Math.max(x, limit.left);
      }
      if (limit.top !== undefined) {
        y = Math.max(y, limit.top);
      }
      if (limit.right !== undefined) {
        x = Math.min(x, limit.right - this.width);
      }
      if (limit.bottom !== undefined) {
        y = Math.min(y, limit.bottom - this.height);
      }
      this.x = x;
      this.y = y;
      if (this.onMove) {
        this.onMove(x, y)
      }
    };
    //* 根据当前长宽把矩形中心点定位于(x, y)
    this.centerTo = function(x, y) {
      this.moveTo(x - this.width / 2, y - this.height / 2)
    };
  }
  return Rect;
});