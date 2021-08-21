<template>
  <el-container class="app">
    <el-aside class="app__aside">
      <side-bar />
    </el-aside>
    <el-container>
      <el-header class="app__header">
        <site-header />
      </el-header>
      <el-main class="app__main">
        <nuxt />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import SiteHeader from '@/components/SiteHeader'
export default {
  components: {
    SideBar,
    SiteHeader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.app {}
.app__header {}
.app__aside {}
.app__main {}
</style>
