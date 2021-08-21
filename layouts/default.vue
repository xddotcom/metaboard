<template>
  <el-container class="app">
    <el-header class="app__header">
      <site-header />
    </el-header>
    <el-container>
      <el-aside class="app__aside">
        <side-bar />
      </el-aside>
      <el-main class="app__main">
        <nuxt />
      </el-main>
    </el-container>
    <div class="app__float">
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
  right: 20px;
  bottom: 20px;
}
.el-main,
.el-header {
  padding: 0;
}
.toolbar-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
