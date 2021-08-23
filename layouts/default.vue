<template>
  <el-container class="app">
    <el-header class="app__header">
      <site-header />
    </el-header>
    <el-container>
      <!-- <el-aside class="app__aside">
        <side-bar />
      </el-aside> -->
      <el-main class="app__main">
        <nuxt />
      </el-main>
    </el-container>

    <div class="app__float" v-show="$store.state.showImageSearch">
      <image-search/>
    </div>

    <div class="toolbar-container">
      <toolbar />
    </div>
  </el-container>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import SideBar from '@/components/SideBar'
import SiteHeader from '@/components/SiteHeader'
import ImageSearch from '@/components/ImageSearch'

export default {
  components: {
    Toolbar,
    SideBar,
    SiteHeader,
    ImageSearch,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars';
.app {
  position: relative;
}
.app__header {
  z-index: $z-index-navbar;
  position: relative;
}
.app__aside {}
.app__main {}
.app__float {
  position: absolute;
  left: 84px;
  top: 84px;
}
.el-main,
.el-header {
  padding: 0;
}
.toolbar-container {
  position: fixed;
  right: 8px;
  bottom: 10px;
}
</style>
