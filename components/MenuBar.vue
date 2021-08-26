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
        width="264"
        popper-class="image-search-popover"
        trigger="click">
        <image-search />
        <el-tooltip effect="dark" :content="item.label" placement="right" slot="reference">
          <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>
        </el-tooltip>
      </el-popover>

      <el-popover
        v-else-if="item.children && item.children.length"
        placement="right"
        width="120"
        trigger="click">
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

      <div v-else-if="item.component" @dragstart="handleDragStart">
        <el-tooltip
          effect="dark"
          placement="right"
          :content="item.label"
          draggable
          :data-component="JSON.stringify(item)">
            <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>123
          </el-tooltip>
      </div>

      <el-tooltip
        v-else
        effect="dark"
        placement="right"
        :content="item.label">
          <i class="icon__icon" :class="item.icon" @click="() => onClick(item)"></i>
        </el-tooltip>
    </div>
    <template-dialog
      v-if="templateDialogVisible"
      :visible.sync="templateDialogVisible"
    />
  </div>
</template>

<script>
import { commonStyle, commonAttr, MENU_BAR_ITEMS } from '@/constants/menubar'
import ImageSearch from '@/components/ImageSearch'
import TemplateDialog from '@/components/dialogs/TemplateDialog'

export default {
  name: 'MenuBar',
  components: {
    ImageSearch,
    TemplateDialog
  },
  data() {
    return {
      MENU_BAR_ITEMS,
      templateDialogVisible: false
    }
  },
  methods: {
    handleDragStart(e) {
      const componentData = e.target.dataset.component
      console.log('drag start', componentData)
      e.dataTransfer.setData('component', componentData)
    },
    onClick(item) {
      console.log(item.name)
      switch (item.name) {
        case 'template':
          this.showTemplateDialog()
          break
        default:
          break
      }
    },
    showTemplateDialog() {
      this.templateDialogVisible = true
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
  cursor: pointer;
}
.child-item .icon__icon {
  cursor: move;
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
