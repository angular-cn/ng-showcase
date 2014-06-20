'use strict';

describe('Service: TreeData', function() {
  beforeEach(module('scHelper'));

  var TreeData;
  var node1, node11, node12, node121, node122;
  var node2, node21, node211, node212, node22;
  var data;
  beforeEach(inject(function(_TreeData_) {
    TreeData = _TreeData_;
    node11 = {
      id: 11,
      label: '11'
    };
    node121 = {
      id: 121,
      label: '121'
    };
    node122 = {
      id: 122,
      label: '122'
    };
    node12 = {
      id: 12,
      label: '12',
      items: [node121, node122]
    };
    node1 = {
      id: 1,
      label: '1',
      items: [node11, node12]
    };
    node211 = {
      id: 211,
      label: '211'
    };
    node212 = {
      id: 212,
      label: '212'
    };
    node21 = {
      id: 21,
      label: '21',
      items: [node211, node212]
    };
    node22 = {
      id: 22,
      label: '22'
    };
    node2 = [node21, node22];
    data = [node1, node2];
  }));

  it('折叠/展开', function() {
    var tree = new TreeData(data);
    tree.fold(node1);
    expect(node1.folded).toBeTruthy();
    tree.unfold(node1);
    expect(node1.folded).toBeFalsy();
  });
  it('选中/非选中状态向子级的扩散', function() {
    var tree = new TreeData(data);
    tree.check(node1);
    expect(node121.checked).toBeTruthy();
    expect(node12.checked).toBeTruthy();
    expect(node1.checked).toBeTruthy();
    expect(node2.checked).toBeFalsy();
    tree.uncheck(node1);
    expect(node121.checked).toBeFalsy();
    expect(node12.checked).toBeFalsy();
    expect(node1.checked).toBeFalsy();
    expect(node2.checked).toBeFalsy();
  });
  it('选中/非选中状态向父级的扩散', function() {
    var tree = new TreeData(data);
    tree.check(node121);
    expect(node121.checked).toBeTruthy();
    expect(node12.checked).toBeTruthy();
    expect(node1.checked).toBeTruthy();
    expect(node2.checked).toBeFalsy();
    tree.uncheck(node121);
    expect(node121.checked).toBeFalsy();
    expect(node12.checked).toBeFalsy();
    expect(node1.checked).toBeFalsy();
  });
  it('半选中状态向上级的扩散', function() {
    var tree = new TreeData(data);
    tree.check(node121);
    expect(node121.semiChecked).toBeFalsy();
    expect(node12.semiChecked).toBeTruthy();
    expect(node1.semiChecked).toBeTruthy();
    expect(node2.semiChecked).toBeFalsy();
    tree.check(node122);
    expect(node12.semiChecked).toBeFalsy();
    expect(node1.semiChecked).toBeTruthy();
    tree.check(node11);
    expect(node1.semiChecked).toBeFalsy();
  });
  it('比较回调函数', function() {
    function isSame(node1, node2) {
      return node1.id === node2.id;
    }
    expect(isSame({id: 1}, {id: 1})).toBeTruthy();

    var tree = new TreeData(data, isSame);

    var node = {id: 121};
    tree.check(node);
    expect(node121.checked).toBeTruthy();
    expect(tree.hasChildren(node12, node)).toBeTruthy();
    expect(node12.checked).toBeTruthy();
  });
});