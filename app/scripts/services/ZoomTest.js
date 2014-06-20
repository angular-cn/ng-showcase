'use strict';

describe('Service: Zoom', function() {
  beforeEach(module('scHelper'));

  var zoom;
  beforeEach(inject(function(Zoom) {
    zoom = new Zoom();
    zoom.small.resize(100, 1000);
    zoom.large.resize(1000, 10000);
    zoom.largeView.resize(100, 100);
  }));

  it('自动计算smallView尺寸', function() {
    expect(zoom.smallView.width).toBe(10);
    expect(zoom.smallView.height).toBe(10);
  });
  it('smallView的位置限制', function() {
    zoom.smallView.moveTo(-100, -100);
    expect(zoom.smallView.x).toBe(0);
    expect(zoom.smallView.y).toBe(0);
    zoom.smallView.moveTo(100000, 10000);
    expect(zoom.smallView.x).toBe(zoom.small.width - zoom.smallView.width);
    expect(zoom.smallView.y).toBe(zoom.small.height - zoom.smallView.height);
  });
  it('放大左上角', function() {
    zoom.smallView.moveTo(0, 0);
    expect(zoom.large.x).toBe(0);
    expect(zoom.large.y).toBe(0);
  });
  it('放大右下角', function() {
    zoom.smallView.moveTo(zoom.small.width, zoom.small.height);
    expect(zoom.large.x).toBe(-900);
    expect(zoom.large.y).toBe(-9900);
  });
  it('放大左中', function() {
    zoom.smallView.centerTo(zoom.smallView.width / 2, zoom.small.height / 2);
    expect(zoom.large.x).toBe(0);
    expect(zoom.large.y).toBe(-4950);
  });
  it('放大上中', function() {
    zoom.smallView.centerTo(zoom.small.width / 2, zoom.smallView.height / 2);
    expect(zoom.large.x).toBe(-450);
    expect(zoom.large.y).toBe(0);
  });
  it('放大正中', function() {
    zoom.smallView.centerTo(zoom.small.width / 2, zoom.small.height / 2);
    expect(zoom.large.x).toBe(-450);
    expect(zoom.large.y).toBe(-4950);
  });
  it('放大内部任意位置', function() {
    zoom.smallView.centerTo(zoom.small.width / 4, zoom.small.height / 4);
    expect(zoom.large.x).toBe(-200);
    expect(zoom.large.y).toBe(-2450);
  });
});