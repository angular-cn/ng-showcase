'use strict';

describe('Service: Zoom', function() {
  beforeEach(module('scHelper'));

  var zoom;
  beforeEach(inject(function(Zoom) {
    zoom = new Zoom();
    zoom.active.resize(100, 1000);
    zoom.passive.resize(1000, 10000);
    zoom.passiveView.resize(100, 100);
  }));

  it('自动计算activeView尺寸', function() {
    expect(zoom.activeView.width).toBe(10);
    expect(zoom.activeView.height).toBe(10);
  });
  it('activeView的位置限制', function() {
    zoom.activeView.moveTo(-100, -100);
    expect(zoom.activeView.x).toBe(0);
    expect(zoom.activeView.y).toBe(0);
    zoom.activeView.moveTo(100000, 10000);
    expect(zoom.activeView.x).toBe(zoom.active.width - zoom.activeView.width);
    expect(zoom.activeView.y).toBe(zoom.active.height - zoom.activeView.height);
  });
  it('放大左上角', function() {
    zoom.activeView.moveTo(0, 0);
    expect(zoom.passive.x).toBe(0);
    expect(zoom.passive.y).toBe(0);
  });
  it('放大右下角', function() {
    zoom.activeView.moveTo(zoom.active.width, zoom.active.height);
    expect(zoom.passive.x).toBe(-900);
    expect(zoom.passive.y).toBe(-9900);
  });
  it('放大左中', function() {
    zoom.activeView.centerTo(zoom.activeView.width / 2, zoom.active.height / 2);
    expect(zoom.passive.x).toBe(0);
    expect(zoom.passive.y).toBe(-4950);
  });
  it('放大上中', function() {
    zoom.activeView.centerTo(zoom.active.width / 2, zoom.activeView.height / 2);
    expect(zoom.passive.x).toBe(-450);
    expect(zoom.passive.y).toBe(0);
  });
  it('放大正中', function() {
    zoom.activeView.centerTo(zoom.active.width / 2, zoom.active.height / 2);
    expect(zoom.passive.x).toBe(-450);
    expect(zoom.passive.y).toBe(-4950);
  });
  it('放大内部任意位置', function() {
    zoom.activeView.centerTo(zoom.active.width / 4, zoom.active.height / 4);
    expect(zoom.passive.x).toBe(-200);
    expect(zoom.passive.y).toBe(-2450);
  });
  it('缩小', function() {
    zoom.active.resize(1000, 10000);
    zoom.passive.resize(100, 1000);
    zoom.passiveView.resize(100, 100);
  });
});