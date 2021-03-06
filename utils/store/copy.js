import { dangerousStore } from '@/plugins/dangerous-store'
import toast from '@/utils/toast'
import generateID from '@/utils/generateID'
import { deepCopy } from '@/utils/utils'
import { toBase64, pasteFromClipboard } from '@/utils/image'
import componentList from '@/custom-component/component-list'

export default {
  state: {
    copyData: null, // 复制粘贴剪切
    isCut: false,
  },
  mutations: {
    copy(state) {
      if (!state.curComponent) {
        document.execCommand('copy')
        return
      }
      state.copyData = {
        data: deepCopy(state.curComponent),
        index: state.curComponentIndex,
      }

      state.isCut = false
    },

    paste(state, { isMouse } = {}) {
      if (!state.copyData) return

      const data = state.copyData.data

      if (isMouse) {
        data.style.top = state.menuTop
        data.style.left = state.menuLeft
      } else {
        data.style.top += 10
        data.style.left += 10
      }

      data.id = generateID()
      dangerousStore.store.commit('addComponent', { component: deepCopy(data) })
      if (state.isCut) {
        state.copyData = null
      }
    },

    cut(state) {
      if (!state.curComponent) {
        toast('请选择组件')
        return
      }

      if (state.copyData) {
        const data = deepCopy(state.copyData.data)
        const index = state.copyData.index
        data.id = generateID()
        dangerousStore.store.commit('addComponent', { component: data, index })
        if (state.curComponentIndex >= index) {
          // 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
          state.curComponentIndex++
        }
      }

      dangerousStore.store.commit('copy')
      dangerousStore.store.commit('deleteComponent')
      state.isCut = true
    },
  }
}
