import Vue from 'vue'

// const components = [
//     'Picture',
//     'VText',
//     'VButton',
//     'Group',
//     'RectShape',
// ]

// components.forEach(key => {
//     Vue.component(key, () => import(`@/custom-component/${key}`))
// })


import Picture from '@/custom-component/Picture'
import VText from '@/custom-component/VText'
import VButton from '@/custom-component/VButton'
import Group from '@/custom-component/Group'
import RectShape from '@/custom-component/RectShape'

Vue.component('v-picture', Picture)
Vue.component('v-text', VText)
Vue.component('v-button', VButton)
Vue.component('group', Group)
Vue.component('rect-shape', RectShape)
