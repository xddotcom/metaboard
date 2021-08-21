<template>
  <div>
    <component-list />
  </div>
</template>

<script>
import ComponentList from '@/components/ComponentList' // 左侧列表组件
export default {
  name: 'SideBar',
  components: {
    ComponentList
  },
  data() {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
