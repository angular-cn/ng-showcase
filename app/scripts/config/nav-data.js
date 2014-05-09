'use strict';

//* 导航数据，允许同一个状态出现在多个组下，在大型项目中可以扩展出roles等选项，来决定其可见性
angular.module('ngShowcaseApp').constant('NavData', [
  {
    label: '首页',
    items: [
      {
        state: 'home.main',
        label: '首页'
      },
      {
        state: 'home.about',
        label: '关于'
      },
      {
        state: 'home.contact',
        label: '联系我们'
      }
    ]
  },
  {
    label: '基本显示控件',
    items: [
      {
        state: 'show.progress',
        label: '进度条'
      },
      {
        state: 'show.panel',
        label: '分组框'
      },
      {
        state: 'show.tab',
        label: '标签页'
      }
    ]
  },
  {
    label: '基本编辑控件',
    items: [
      {
        state: 'input.html5',
        label: 'HTML5'
      },
      {
        state: 'input.maskedText',
        label: '掩模输入框'
      },
      {
        state: 'input.rich',
        label: '富文本编辑'
      },
      {
        state: 'input.checkbox',
        label: '检查框'
      },
      {
        state: 'input.radio',
        label: '单选框'
      },
      {
        state: 'input.calendar',
        label: '日历'
      },
      {
        state: 'input.datetime',
        label: '日期/时间'
      },
      {
        state: 'input.file',
        label: '文件上传'
      }
    ]
  },
  {
    label: '下拉框控件',
    items: [
      {
        state: 'select.basic',
        label: '基本'
      },
      {
        state: 'select.cascade',
        label: '级联'
      },
      {
        state: 'select.custom',
        label: '自定义'
      },
      {
        state: 'select.multiple',
        label: '多选'
      },
      {
        state: 'select.typeAhead',
        label: '自动完成'
      },
      {
        state: 'select.select2',
        label: 'Select2'
      }
    ]
  },
  {
    label: '表格/Grid',
    items: [
      {
        state: 'table.basic',
        label: '基本/数据类型'
      },
      {
        state: 'table.sort',
        label: '排序'
      },
      {
        state: 'table.paging',
        label: '分页'
      },
      {
        state: 'table.filter',
        label: '过滤'
      },
      {
        state: 'table.remote',
        label: '后端综合'
      },
      {
        state: 'table.header',
        label: '复合表头'
      },
      {
        state: 'table.frozen',
        label: '锁定行/列'
      },
      {
        state: 'table.editing',
        label: '就地编辑'
      },
      {
        state: 'table.checkbox',
        label: '复选框'
      },
      {
        state: 'table.virtual',
        label: '百万行大表'
      },
      {
        state: 'table.summary',
        label: '汇总行'
      },
      {
        state: 'table.tree',
        label: '树+表'
      },
      {
        state: 'table.grouping',
        label: '分组'
      },
      {
        state: 'table.expanding',
        label: '扩展信息'
      },
      {
        state: 'table.hover',
        label: '详情提示'
      },
      {
        state: 'table.cascade',
        label: '内嵌子表'
      },
      {
        state: 'table.highlight',
        label: '高亮规则'
      }
    ]
  },
  {
    label: '树',
    items: [
      {
        state: 'tree.basic',
        label: '基本'
      },
      {
        state: 'tree.checkbox',
        label: '级联选择'
      },
      {
        state: 'tree.nav',
        label: '导航树'
      }
    ]
  },
  {
    label: '表单',
    items: [
      {
        state: 'form.basic',
        label: '基本校验'
      },
      {
        state: 'form.remoteValidation',
        label: '在线校验'
      },
      {
        state: 'form.customValidation',
        label: '自定义校验'
      },
      {
        state: 'form.dependency',
        label: '级联/依赖'
      }
    ]
  },
  {
    label: '统计分析',
    items: [
      {
        state: 'stat.cube',
        label: '决策方'
      },
      {
        state: 'stat.chart',
        label: '统计图'
      },
      {
        state: 'stat.easypiechart',
        label: '百分比进度饼图'
      }
    ]
  },
  {
    label: '动画',
    items: [
      {
        state: 'animation.basic',
        label: '基本'
      },
      {
        state: 'animation.custom',
        label: '自定义'
      }
    ]
  },
  {
    label: '工具',
    items: [
      {
        state: 'utils.modal',
        label: '模态对话框'
      },
      {
        state: 'utils.dragAndDrop',
        label: '拖曳'
      },
      {
        state: 'utils.portal',
        label: '动态门户'
      }
    ]
  },
  {
    label: '综合范例',
    items: [
      {
        state: 'list.thumbnail',
        label: '商品列表/购物车'
      }
    ]
  }
]);