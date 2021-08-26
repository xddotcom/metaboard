<template>
  <div @dragstart="handleDragStart" class="component-list">
    <el-tooltip
      v-for="(item, index) in componentList" :key="index" draggable :data-index="index"
      class="item" effect="dark" :content="item.label" placement="right">
      <i class="icon__icon" :class="'icon-' + item.icon" @click="() => onClick(item)"></i>
    </el-tooltip>
  </div>
</template>

<script>
import componentList from '@/custom-component/component-list'

export default {
  data() {
    return {
      componentList,
    }
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('index', e.target.dataset.index)
    },
    onClick(item) {
      if (item.component === 'v-add') {
        this.$store.commit('toggleImageSearch')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.component-list {
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
</style>
