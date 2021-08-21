<template>
  <el-container class="app">
    <el-aside class="app__aside">
      <side-bar />
    </el-aside>
    <el-container>
      <el-header class="app__header">
        <toolbar />
      </el-header>
      <el-main class="app__main">
        <nuxt />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
    <div class="app__float">
      <image-search/>
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
.app {
  position: relative;
}
.app__header {}
.app__aside {}
.app__main {}
.app__float {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
