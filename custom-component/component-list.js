// 公共样式
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

// 编辑器左侧组件列表
const list = [
    {
        component: 'v-template',
        label: '模板',
        icon: 'template',
        propValue: require('@/assets/title.jpg'),
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'v-add',
        label: '搜索',
        icon: 'search',
        style: {

        },
    },
    {
        component: 'v-resources',
        label: '元素',
        icon: 'sparks',
        style: {

        },
    },
    {
        component: 'v-text',
        label: '便签',
        propValue: '双击编辑文字',
        icon: 'note',
        style: {
            width: 200,
            height: 22,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'v-link',
        label: '链接',
        propValue: '请输入网址链接',
        icon: 'link',
        style: {
            width: 200,
            height: 22,
            fontSize: 14,
        },
    },
    // {
    //     component: 'rect-shape',
    //     label: '绘制',
    //     propValue: '&nbsp;',
    //     icon: 'shape',
    //     style: {
    //         width: 200,
    //         height: 200,
    //         fontSize: 14,
    //         fontWeight: 500,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: 'center',
    //         color: '',
    //         borderColor: '#000',
    //         borderWidth: 1,
    //         backgroundColor: '',
    //         borderStyle: 'solid',
    //         verticalAlign: 'middle',
    //     },
    // },
    {
        component: 'v-color',
        label: '色卡',
        icon: 'color',
        propValue: '#59d6b7',
        style: {
            width: 180,
            height: 180,
        },
    },
    {
        component: 'v-todo',
        label: '待办事项',
        icon: 'todo',
        propValue: '#59d6b7',
        style: {
            width: 180,
            height: 180,
        },
    },
    {
        component: 'v-line',
        label: '线条',
        propValue: '请画出线条',
        icon: 'arrow-line',
        style: {
            width: 200,
            height: 22,
        },
    },
    {
        component: 'v-board',
        label: '看板',
        icon: 'board',
        propValue: '#59d6b7',
        style: {
            width: 180,
            height: 180,
        },
    },
    {
        component: 'v-column',
        label: '竖栏',
        icon: 'column',
        propValue: '#59d6b7',
        style: {
            width: 180,
            height: 180,
        },
    },
    // {
    //     component: 'v-button',
    //     label: '按钮',
    //     propValue: '按钮',
    //     icon: 'button',
    //     style: {
    //         width: 100,
    //         height: 34,
    //         borderWidth: 1,
    //         borderColor: '',
    //         borderRadius: '',
    //         fontSize: 14,
    //         fontWeight: 500,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: '',
    //         color: '',
    //         backgroundColor: '',
    //     },
    // },
    {
        component: 'v-upload',
        label: '上传',
        icon: 'upload',
        propValue: require('@/assets/title.jpg'),
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'v-iframe',
        label: '内嵌窗口',
        icon: 'window',
        propValue: 'https://uirush.net/',
        style: {
            width: 375,
            height: 640,
            borderRadius: ''
        },
    },
    {
        component: 'v-comment',
        label: '评论',
        icon: 'comment',
        propValue: require('@/assets/title.jpg'),
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
