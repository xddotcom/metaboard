<template>
   <div class="home">
      <div class="sidebar">
         <menu-bar />
      </div>
      <main>
      <!-- 中间画布 -->
         <section class="center">
            <div class="content" @drop="handleDrop" @dragover="handleDragOver"
            @mousedown="handleMouseDown" @mouseup="deselectCurComponent">
               <Editor />
            </div>
         </section>
      </main>
   </div>
</template>

<script>
import io from 'socket.io-client'
import MenuBar from '@/components/MenuBar'
import Editor from '@/components/Editor/index'
import ComponentList from '@/components/ComponentList' // 左侧列表组件
import AttrList from '@/components/AttrList' // 右侧属性列表
import AnimationList from '@/components/AnimationList' // 右侧动画列表
import EventList from '@/components/EventList' // 右侧事件列表
import componentList from '@/custom-component/component-list' // 左侧列表数据
import { deepCopy } from '@/utils/utils'
import { mapState } from 'vuex'
import generateID from '@/utils/generateID'
import { listenGlobalKeyDown } from '@/utils/shortcutKey'

export default {
   components: {
      MenuBar,
      Editor,
      ComponentList,
      AttrList,
      AnimationList,
      EventList
   },
   data() {
      return {
         activeName: 'attr',
         reSelectAnimateIndex: undefined,
      }
   },
   computed: mapState([
      'componentData',
      'curComponent',
      'isClickComponent',
      'canvasStyleData',
   ]),
   created() {
      this.restore()
      // 全局监听按键事件
      listenGlobalKeyDown()
   },
   methods: {
      restore() {
         // 用保存的数据恢复画布
         if (localStorage.getItem('canvasData')) {
            this.$store.commit('setComponentData', this.resetID(JSON.parse(localStorage.getItem('canvasData'))))
         }

         if (localStorage.getItem('canvasStyle')) {
            this.$store.commit('setCanvasStyle', JSON.parse(localStorage.getItem('canvasStyle')))
         }
      },

      resetID(data) {
         data.forEach(item => {
            item.id = generateID()
         })

         return data
      },

      handleDrop(e) {
         e.preventDefault()
         e.stopPropagation()
         const index = e.dataTransfer.getData('index')
         let componentData = e.dataTransfer.getData('component')
         if (componentData) {
            componentData = JSON.parse(componentData)
         }
         if (typeof componentData === 'object' && componentData.name) {
            const component = deepCopy(componentData)
            component.style.top = e.offsetY
            component.style.left = e.offsetX
            component.id = generateID()
            this.$store.commit('addComponent', { component })
            this.$store.commit('recordSnapshot')
         } else if (index) {
            const component = deepCopy(componentList[index])
            component.style.top = e.offsetY
            component.style.left = e.offsetX
            component.id = generateID()
            this.$store.commit('addComponent', { component })
            this.$store.commit('recordSnapshot')
         }
      },

      handleDragOver(e) {
         e.preventDefault()
         e.dataTransfer.dropEffect = 'copy'
      },

      handleMouseDown() {
         this.$store.commit('setClickComponentStatus', false)
      },

      deselectCurComponent(e) {
         if (!this.isClickComponent) {
            this.$store.commit('setCurComponent', { component: null, index: null })
         }

         // 0 左击 1 滚轮 2 右击
         if (e.button != 2) {
            this.$store.commit('hideContextMenu')
         }
      },
   },
}
</script>

<style lang="scss">
.home {
   background: #fff;
   .sidebar {
      position: fixed;
      top: 84px;
      left: 8px;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      z-index: 100;
      &::-webkit-scrollbar {
         width: 0;
      }
   }
   main {
      height: calc(100vh - 60px);
      // margin-left: 72px;
      width: 100%;
      position: relative;

      .left {
         position: absolute;
         height: 100%;
         width: 200px;
         left: 0;
         top: 0;
         padding-top: 10px;
      }

      .right {
         position: absolute;
         height: 100%;
         width: 262px;
         right: 0;
         top: 0;
      }

      .center {
         background: #f5f5f5;
         height: 100%;
         overflow: auto;
         .content {
            width: 100%;
            height: 100%;
            overflow: auto;
         }
      }
   }

   .placeholder {
      text-align: center;
      color: #333;
   }
}
</style>
