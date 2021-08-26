<template>
  <div class="meun-bar">
    <div
      v-for="item in MENU_BAR_ITEMS"
      :key="item.name"
      class="item"
    >
      <el-popover
        v-if="item.name === 'search'"
        placement="right"
        width="400"
        trigger="hover">
        <image-search />
        <el-tooltip effect="dark" :content="item.label" placement="right" slot="reference">
          <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>
        </el-tooltip>
      </el-popover>

      <el-popover
        v-else-if="item.children && item.children.length"
        placement="right"
        width="120"
        trigger="hover">
        <div class="children-container" @dragstart="handleDragStart">
          <div
            v-for="child in item.children"
            :key="child.name"
            class="item child-item">
            <el-tooltip
              effect="dark"
              placement="top"
              :content="child.label"
              draggable
              :data-component="JSON.stringify(child)">
              <i class="icon__icon" :class="child.icon" @click="() => onClick(child)"></i>
            </el-tooltip>
          </div>
        </div>
        <el-tooltip effect="dark" :content="item.label" placement="right" slot="reference">
          <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>
        </el-tooltip>
      </el-popover>

      <el-tooltip
        v-else
        effect="dark" :content="item.label" placement="right" slot="reference">
          <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>
        </el-tooltip>
    </div>
  </div>
</template>

<script>
import { commonStyle, commonAttr, MENU_BAR_ITEMS } from '@/constants/menubar'
import ImageSearch from '@/components/ImageSearch'

export default {
  name: 'MenuBar',
  components: {
    ImageSearch
  },
  data() {
    return {
      MENU_BAR_ITEMS
    }
  },
  methods: {
    handleDragStart(e) {
      const componentData = e.target.dataset.component
      console.log('drag start', componentData)
      e.dataTransfer.setData('component', componentData)
    },
    onClick(item) {
      if (item.component === 'v-add') {
        this.$store.commit('toggleImageSearch')
      } else {
        console.log(item)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.meun-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  z-index: 100;

  .list {
    width: 100%;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }
  }
}
.item {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color .2s ease-in-out;
  &:hover {
    background: #F0F0F0;
  }
  & + & {
    margin-top: 2px;
  }
}
.icon__icon {
  font-size: 22px;
}
.children-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.child-item {
  width: 33.333333%;
  padding: 5px;
  text-align: center;
  cursor: move;
}
</style>
