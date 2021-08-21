<template>
  <div class="v-iframe">
    <iframe :src="propValue" frameborder="0" allowfullscreen></iframe>
    <!-- <div v-if="!allowClick" class="iframe-mask" @dblclick="setClickAvailable"></div> -->
  </div>
</template>

<script>
export default {
  name: 'VIframe',
  props: {
    propValue: {
      type: String,
      default: '',
    },
    element: {
      type: Object,
    },
  },
  data() {
    return {
      allowClick: false
    }
  },
  methods: {
    setClickAvailable() {
      if (this.element.isLock) return
      this.allowClick = true
    },
    handleBlur() {
      console.log('blur div!!!')
    }
  },
}
</script>

<style lang="scss" scoped>
.v-iframe,
iframe {
  width: 100%;
  height: 100%;
}
.v-iframe {
  position: relative;
}
.iframe-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  &::after {
    content: '双击以开启iframe交互';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    padding: 10px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #ffffff;
    text-align: center;
  }
}
</style>
