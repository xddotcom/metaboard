import Vue from 'vue'

import animation from '@/utils/store/animation'
import compose from '@/utils/store/compose'
import contextmenu from '@/utils/store/contextmenu'
import copy from '@/utils/store/copy'
import event from '@/utils/store/event'
import layer from '@/utils/store/layer'
import snapshot from '@/utils/store/snapshot'
import lock from '@/utils/store/lock'

export default {
    state: {
        ...animation.state,
        ...compose.state,
        ...contextmenu.state,
        ...copy.state,
        ...event.state,
        ...layer.state,
        ...snapshot.state,
        ...lock.state,

        editMode: 'edit', // 编辑器模式 edit preview
        canvasStyleData: { // 页面全局数据
            width: 1200,
            height: 740,
            scale: 100,
        },
        componentData: [], // 画布组件数据
        curComponent: null,
        curComponentIndex: null,
        // 点击画布时是否点中组件，主要用于取消选中组件用。
        // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
        isClickComponent: false,
        showImageSearch: false,
    },
    mutations: {
        ...animation.mutations,
        ...compose.mutations,
        ...contextmenu.mutations,
        ...copy.mutations,
        ...event.mutations,
        ...layer.mutations,
        ...snapshot.mutations,
        ...lock.mutations,
        toggleImageSearch(state) {
            state.showImageSearch = !state.showImageSearch
        },
        setClickComponentStatus(state, status) {
            state.isClickComponent = status
        },

        setEditMode(state, mode) {
            state.editMode = mode
        },

        setCanvasStyle(state, style) {
            state.canvasStyleData = style
        },

        setCurComponent(state, { component, index }) {
            state.curComponent = component
            state.curComponentIndex = index
        },

        setShapeStyle({ curComponent }, { top, left, width, height, rotate }) {
            if (top) curComponent.style.top = top
            if (left) curComponent.style.left = left
            if (width) curComponent.style.width = width
            if (height) curComponent.style.height = height
            if (rotate) curComponent.style.rotate = rotate
        },

        setShapeSingleStyle({ curComponent }, { key, value }) {
            curComponent.style[key] = value
        },

        setComponentData(state, componentData = []) {
            Vue.set(state, 'componentData', componentData)
        },
        updateComponentData(state, payload) {
            if (typeof payload.id === 'undefined') {
                state.componentData.push({...payload})
                return
            }
            const componentIndex = state.componentData.findIndex((item) => item.id === payload.id)
            if (componentIndex >= 0) {
                state.componentData[componentIndex] = {...payload}
            } else {
                state.componentData.push({...payload})
            }
        },
        addComponent(state, { component, index }) {
            if (index !== undefined) {
                state.componentData.splice(index, 0, component)
            } else {
                state.componentData.push(component)
            }
        },

        deleteComponent(state, index) {
            if (index === undefined) {
                index = state.curComponentIndex
            }

            if (index == state.curComponentIndex) {
                state.curComponentIndex = null
                state.curComponent = null
            }

            state.componentData.splice(index, 1)
        },
    },
}
