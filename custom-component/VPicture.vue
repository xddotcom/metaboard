<template>
  <div class="v-picture">
    <img :src="propValue">
    <div v-if="!!pending" class="uploading"></div>
    <div v-else class="btn-upload">
      <i class="el-icon-plus" @click.stop="onClickUpload">
        <input
          hidden
          ref="upload"
          type="file"
          accept="image/*"
          @change="onSelectImage">
      </i>
    </div>
  </div>
</template>

<script>

import { toBase64 } from '@/utils/image'

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
      pending: false,
    }
  },
  methods: {
    onClickUpload() {
      this.$refs.upload.click()
    },
    async onSelectImage(e) {
      const file = e.target.files[0]
      this.pending = true
      const imgSrc = await toBase64(file)
      this.$store.commit('updateComponentData', {
        ...this.element,
        propValue: imgSrc
      })
      this.pending = false
    }
  },
}
</script>

<style lang="scss" scoped>
.v-picture {
  position: relative;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.btn-upload {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .25s ease-in-out;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
}
i.el-icon-plus {
  font-size: 32px;
  cursor: pointer;
}
.uploading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: orange;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
