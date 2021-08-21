<template>
  <header>
    <div class="header__left">
      <nuxt-link to="/" class="logo"></nuxt-link>
      <div class="title">{{ projectTitle }}</div>
    </div>
    <div class="header__right">
      <el-button class="header__btn" icon="el-icon-phone-outline" circle size="small"></el-button>
      <el-avatar class="header__btn" :size="36" :src="userData.avatar || defaultAvatar"></el-avatar>
      <el-button class="header__btn" type="primary" round size="small">分享</el-button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SideHeader',
  data() {
    return {
      defaultAvatar: 'avatar-female.png',
      projectTitle: '想象力白板'
    }
  },
  computed: {
    ...mapState('user', ['userData'])
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 58px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 10px 15px;
  color: #000000;
  box-shadow: inset 0px -1px 0px #EAEAEB;
}
.header__left,
.header__right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  width: 60px;
  height: 38px;
  background-color: orange;
  margin-right: 10px;
}
.title {
  font-size: 16px;
  font-weight: 500;
}
.header__btn {
  margin-right: 10px;
}
</style>
