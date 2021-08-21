<template>
  <div class="color-card">
    <div class="color-preview" :style="{'backgroundColor':colorDisplay}"></div>
    <div @mousedown="handleMousedown" @blur="handleBlur" class="color-input-wrapper">
      <el-input
        size="mini" :value="colorText" v-model="colorText" @change="handleChange"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      require: true,
    },
    element: {
      type: Object,
    },
  },
  data() {
    return {
      colorText: this.propValue
    }
  },
  computed: {
    colorDisplay() {
      return this.colorText || '#fafafa'
    }
  },
  mounted() {
    console.log(this.element)
  },
  methods: {
    handleChange(value) {
      this.colorText = value
      this.$store.commit('updateComponentData', {
        ...this.element,
        propValue: this.colorText
      })
    },
    handleMousedown(e) {
      e.stopPropagation()
    },
    handleBlur(e) {},
  },
  watch: {
    propValue: function(newVal) {
      this.colorText = newVal
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style lang="scss">
.color-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  .color-preview {
    flex: 1;
    width: 100%;
  }
  .color-input-wrapper {
    width: 100%;
    .el-input {
      width: 100%;
    }
    .el-input__inner {
      border-color: transparent;
    }
  }
}
</style>
