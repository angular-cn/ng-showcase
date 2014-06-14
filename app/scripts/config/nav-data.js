'use strict';

//* 导航数据，允许同一个状态出现在多个组下，在大型项目中可以扩展出roles等选项，来决定其可见性
angular.module('ngShowcaseApp').constant('NavData', [
  {
    label: '首页',
    items: [
      {
        state: 'home.home',
        label: '首页',
        description: 'Angular showcase!',
        authors: ['ngShowcase'],
        progress: 100
      },
      {
        state: 'home.about',
        label: '关于',
        description: '关于ngShowcase开发组',
        authors: ['ngShowcase'],
        progress: 100
      },
      {
        state: 'home.contact',
        label: '关注我们',
        authors: ['ngShowcase'],
        progress: 100
      }
    ]
  },
  {
    label: '基本显示控件',
    items: [
      {
        state: 'show.progress',
        label: '进度条',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'show.panel',
        label: '分组框',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'show.tab',
        label: '标签页',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'show.alert',
        label: '警告框',
        authors: ['playing'],
        progress: 100
      }
    ]
  },
  {
    label: '基本编辑控件',
    items: [
      {
        state: 'input.html5',
        label: 'HTML5',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'input.maskedText',
        label: '掩模输入框'
      },
      {
        state: 'input.checkbox',
        label: '检查框',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'input.radio',
        label: '单选框',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'input.calendar',
        label: '日历',
        authors: ['playing'],
        progress: 100
      },
      {
        state: 'input.datetime',
        label: '日期/时间'
      },
      {
        state: 'input.file',
        label: '文件上传',
        authors: ['雪狼'],
        progress: 100
      }
    ]
  },
  {
    label: '下拉框控件',
    items: [
      {
        state: 'select.basic',
        label: '基本',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'select.cascade',
        label: '级联',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'select.custom',
        label: '自定义',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'select.multiple',
        label: '多选',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'select.typeAhead',
        label: '自动完成',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'select.select2',
        label: 'Select2',
        authors: ['雪狼'],
        progress: 100
      }
    ]
  },
  {
    label: '表格/Grid',
    items: [
      {
        state: 'table.basic',
        label: '基本',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'table.local',
        label: '前端综合',
        description: "前端实现：分页/排序/过滤/就地编辑",
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'table.remote',
        label: '后端综合',
        description: "后端实现：分页/排序/过滤/就地编辑",
        authors: ['雪狼'],
        progress: 10
      },
      {
        state: 'table.frozen',
        label: '锁定行/列'
      },
      {
        state: 'table.summary',
        label: '汇总行'
      },
      {
        state: 'table.virtual',
        label: '百万行大表'
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
        state: 'table.cascade',
        label: '内嵌子表'
      }
    ]
  },
  {
    label: '树',
    items: [
      {
        state: 'tree.basic',
        label: '基本',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'tree.checkbox',
        label: '级联选择',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'tree.treeData',
        label: 'TreeData',
        authors: ['雪狼'],
        progress: 100
      },
      {
        state: 'tree.uiTree',
        label: 'UiTree',
        authors: ['雪狼'],
        progress: 10
      }
    ]
  },
  {
    label: '表单',
    items: [
      {
        state: 'form.basic',
        label: '基本校验',
        authors: ['why520crazy'],
        progress: 80
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
        label: '百分比进度饼图',
        authors: ['Ken'],
        progress: 100
      }
    ]
  },
  {
    label: '动画',
    items: [
      {
        state: 'animation.basic',
        label: '基本',
        authors: ['playing'],
        progress: 100
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
        label: '模态对话框',
        authors: ['playing'],
        progress: 100
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
        state: 'integrated.cart',
        label: '商品列表/购物车',
        authors: ['雪狼'],
        progress: 100
      }
    ]
  },
  {
    label: '第三方组件',
    items: [
      {
        state: 'thirdparty.baiduueditor',
        label: '百度UEditor',
        authors: ['zxsoft'],
        progress: 60
      }
    ]
  }

]);