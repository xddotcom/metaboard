<template>
  <div class="v-link">
    <div v-if="disableEditLink" class="link-preview" ref="preview">
      <div class="image" :style="coverStyle"></div>
      <div class="caption">
        <a :href="url" class="caption__link">
          <img v-if="favicon" class="caption__favicon" :src="favicon"><span>{{ title }}</span>
        </a>
        <div class="caption__description">{{ description }}</div>
      </div>
    </div>
    <div v-else class="link-input" v-loading="pending">
      <el-form @submit.native.prevent="onSubmitLink">
        <el-form-item>
          <el-input prefix-icon="el-icon-link" placeholder="请输入网站URL" v-model="cachedElement.propValue.url"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { deepCopy } from '@/utils/utils'

export default {
  name: 'VLink',
  props: {
    element: {
      type: Object,
    }
  },
  data() {
    return {
      pending: false,
      canEdit: false,
      cachedElement: deepCopy(this.element || {})
    }
  },
  computed: {
    title() {
      return this.cachedElement && this.cachedElement.propValue && this.cachedElement.propValue.title
    },
    url() {
      return this.cachedElement && this.cachedElement.propValue && this.cachedElement.propValue.url
    },
    description() {
      return this.cachedElement && this.cachedElement.propValue && this.cachedElement.propValue.description
    },
    favicon() {
      return this.cachedElement && this.cachedElement.propValue && this.cachedElement.propValue.favicon
    },
    image() {
      return this.cachedElement && this.cachedElement.propValue && this.cachedElement.propValue.image
    },
    coverStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    disableEditLink() {
      return this.title
    },
  },
  methods: {
    fetchMetadata(url) {},
    async onSubmitLink() {
      const { url } = this.cachedElement.propValue
      if (/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(url)) {
        this.pending = true
        try {
          const res = await this.$axios.get('/api/getMetadata', {
            params: {
              url: encodeURIComponent(url)
            }
          })
          const { metadata, favicons, socials } = res.data
          const { title, description, image } = metadata
          const favicon = favicons && favicons.length ? favicons[0] : ''

          this.cachedElement.propValue.title = title || ''
          this.cachedElement.propValue.favicon = favicon
          this.cachedElement.propValue.description = description || ''
          this.cachedElement.propValue.image = image || ''
        } catch (error) {

        }
        this.updateCardSize()
        this.pending = false
      }
    },
    updateCardSize() {
      this.$nextTick(() => {
        const $node = this.$refs.preview
        const height = $node.clientHeight
        const width = $node.clientWidth
        this.cachedElement.style.width = width
        this.cachedElement.style.height = height
        this.$store.commit('updateComponentData', {
          ...this.cachedElement
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.v-link {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
}
.link-input {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.link-preview {
  width: 100%;
}
.image {
  width: 100%;
  padding-top: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #e0e0e0;
}
.caption {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
}
.caption__link {
  font-size: 14px;
  color: #000;
  display: block;
  margin-bottom: 8px;
}
.caption__favicon {
  height: 15px;
  vertical-align: middle;
  margin-right: 5px;
}
.caption__description {
  color: #777;
  font-size: 13px;
  line-height: 16px;
  // height: 48px;
  // overflow: hidden;
  // width: 100%;
  // display: -webkit-box;
  // -webkit-line-clamp: 3;
  // -webkit-box-orient: vertical;
}
::v-deep {
  .el-input__inner {
    border: none;
  }
}
</style>
