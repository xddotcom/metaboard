/**
 * 这是一段很傻逼的写法
 * 不应该这么直接把 store 暴露到全局
 * 但是时间来不及了
 */

import Vue from 'vue'
import io from 'socket.io-client'

export const dangerousStore = {
  store: null
}

export default async ({ store }) => {
  dangerousStore.store = store
  const $socket = io(location.origin)
  $socket.on('get-update-board', (msg, cb) => {
    const { areaData, canvasStyleData, componentData } = msg
    store.commit('setAreaData', areaData)
    store.commit('setCanvasStyle', canvasStyleData)
    store.commit('setComponentData', componentData)
  })
  const updateBoard = () => {
    const { areaData, canvasStyleData, componentData } = store.state
    const res = $socket.emit('update-board', {
      areaData, canvasStyleData, componentData
    }, (resp) => {
      console.log('!!!!!', resp)
    })
  }
  const unsubscribe = store.subscribe((mutation, state) => {
    // console.log(mutation.type)
    // console.log(mutation.payload)
    if (![
      'setAreaData', 'setCanvasStyle', 'setComponentData'
    ].includes(mutation.type)) {
      updateBoard()
    }
  })
  Vue.prototype.$socket = $socket
}
