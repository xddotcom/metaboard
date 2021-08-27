export const commonStyle = {
  rotate: 0,
  opacity: 1,
}

export const commonAttr = {
  animations: [],
  events: {},
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false, // 是否锁定组件
}

export const availableComponents = [
  // components children
  {
    label: '便签',
    kind: 'components',
    name: 'v-text',
    icon: 'icon-note',
    propValue: '双击编辑文字',
    component: 'v-text',
    style: {
      ...commonStyle,
      width: 200,
      height: 22,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
    },
    ...commonAttr
  },
  {
    label: '链接',
    kind: 'components',
    name: 'v-link',
    icon: 'icon-link',
    propValue: {
      url: '',
      title: '',
      image: '',
      favicon: '',
      description: '',
      themeColor: ''
    },
    component: 'v-link',
    style: {
      ...commonStyle,
      width: 300,
      height: 60,
    },
    ...commonAttr
  },
  {
    label: '色卡',
    kind: 'components',
    name: 'v-color',
    icon: 'icon-color',
    propValue: '#59d6b7',
    component: 'v-color',
    style: {
      ...commonStyle,
      width: 180,
      height: 180,
    },
    ...commonAttr,
  },
  {
    label: 'TODO',
    kind: 'components',
    name: 'v-todo',
    icon: 'icon-todo',
    propValue: [],
    component: 'v-todo',
    style: {
      ...commonStyle,
      width: 240,
      height: 400,
      fontSize: 14
    },
    ...commonAttr
  },
  {
    label: '笔记(MD)',
    kind: 'components',
    name: 'v-note',
    icon: 'icon-bell',
    propValue: '<h1>开始编辑 markdown</h1><p>hello, world</p>',
    component: 'v-note',
    style: {
      ...commonStyle,
      width: 240,
      height: 400,
      fontSize: 14
    },
    ...commonAttr
  },
  // shapes children
  {
    label: 'Arrow',
    kind: 'shapes',
    name: 'shapes',
    icon: 'icon-arrow-line',
    propValue: '',
    component: '',
    style: {
      ...commonStyle
    },
    ...commonAttr,
  },
  {
    label: '矩形',
    kind: 'shapes',
    name: 'rect-shape',
    icon: 'icon-shape',
    propValue: '&nbsp;',
    component: 'rect-shape',
    style: {
      ...commonStyle,
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '',
      borderStyle: 'solid',
      verticalAlign: 'middle',
    },
    ...commonAttr,
  },
  {
    component: 'v-picture',
    name: 'picture',
    label: '上传',
    icon: 'icon-upload',
    propValue: require('@/assets/title.jpg'),
    style: {
      ...commonStyle,
      width: 300,
      height: 200,
      borderRadius: '',
    },
    ...commonAttr,
  },
  {
    component: 'v-iframe',
    name: 'iframe',
    label: '内嵌窗口',
    icon: 'icon-window',
    propValue: 'https://uirush.net/',
    style: {
      ...commonStyle,
      width: 375,
      height: 640,
      borderRadius: ''
    },
    ...commonAttr,
  },
]