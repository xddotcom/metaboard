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


import VPicture from '@/custom-component/VPicture'
import VColor from '@/custom-component/VColor'
import VText from '@/custom-component/VText'
import VButton from '@/custom-component/VButton'
import VIframe from '@/custom-component/VIframe'
import Group from '@/custom-component/Group'
import RectShape from '@/custom-component/RectShape'

Vue.component('v-picture', VPicture)
Vue.component('v-text', VText)
Vue.component('v-iframe', VIframe)
Vue.component('v-button', VButton)
Vue.component('v-color', VColor)
Vue.component('group', Group)
Vue.component('rect-shape', RectShape)
