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
        component: 'v-text',
        label: '笔记',
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
        component: 'v-picture',
        label: '图片',
        icon: 'upload',
        propValue: require('@/assets/title.jpg'),
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'v-color',
        label: '色卡',
        icon: 'color',
        propValue: '',
        style: {
            width: 180,
            height: 180,
        },
    },
    {
        component: 'rect-shape',
        label: '绘制',
        propValue: '&nbsp;',
        icon: 'shape',
        style: {
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
    },
    {
        component: 'v-iframe',
        label: '内嵌窗口',
        icon: 'iframe',
        propValue: 'https://www.heidianer.com/',
        style: {
            width: 375,
            height: 640,
            borderRadius: ''
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
