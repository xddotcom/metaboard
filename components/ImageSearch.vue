<template>
  <div class="wrapper">
    <div class="header">
      <el-form @submit.native.prevent="onSubmit">
        <el-form-item style="margin: 0 auto;">
          <el-input
            placeholder="搜索"
            suffix-icon="el-icon-search"
            v-model="q" @change="onChangeQ"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="body">
      <div class="category-list">
        <div
          v-for="(cat, index) in categoryList"
          :key="cat.title"
          class="category-item"
          @click="() => onSelectCategory(cat)"
        >
          <el-image
            style="width: 40px; height: 40px;"
            :src="require(`@/assets/images/icons/icons-${index}.svg`)"
            fit="contain"></el-image>
          <div class="category-item__caption">
            <div class="category-item__title">{{ cat.title }}</div>
            <div class="category-item__description">{{ cat.descripion }}</div>
          </div>
        </div>
      </div>
      <div class="search-results" :class="{active: showSearchResult}">
        <div class="search-results__head">
          <i class="el-icon-back" style="cursor: pointer;" @click="showSearchResult = false"></i>
          <span>Search in <strong>{{ category || '' }}</strong></span>
        </div>
        <div class="search-results__content">
          <div class="card-item" v-for="image in images" :key="image.title" @click="() => onSelectItem(image)">
            <div class="card-image" :style="{'backgroundImage':`url(${image.src})`}"></div>
            <div class="card-name">{{ image.title }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { materialCategoryList } from '@/constants/material-search'

export default {
  name: 'ImageSearch',
  data() {
    return {
      q: '',
      category: '',
      categoryList: [...materialCategoryList],
      showSearchResult: false,
      images: [
        {
          title: '9套Ins海报模板',
          src: 'https://up.img.heidiancdn.com/o_1da98ai2b11e6t9i1ff1j3m6ot01.jpg?imageView2/2/w/800/ignore-error/1'
        },
        {
          title: 'Island岛矢量海报',
          src: 'https://up.img.heidiancdn.com/o_1c736rtphirb1c69huh1ui51spp01.jpg?imageView2/2/w/800/ignore-error/1'
        },
        {
          title: '电商品牌GIF海报',
          src: 'https://up.img.heidiancdn.com/o_1c9749enf1ievd0e1olp2m11j1304.gif?imageView2/2/w/800/ignore-error/1'
        },
        {
          title: '30套Ins风海报模板',
          src: 'https://up.img.heidiancdn.com/o_1da0hipvne6g1nfgq4k137k1o6900.jpg?imageView2/2/w/800/ignore-error/1'
        },
        {
          title: '20套时尚动效海报GIF PSD',
          src: 'https://up.img.heidiancdn.com/o_1d6vshdo0ub4rgp16ns5g6o500.jpg?imageView2/2/w/800/ignore-error/1'
        },
      ]
    }
  },
  methods: {
    onSelectCategory(cat) {
      if (this.category === cat) {
        this.category = ''
      } else {
        this.category = cat.title
      }
      this.fetchList()
      this.showSearchResult = true
    },
    onChangeQ() {
      this.fetchList()
      this.showSearchResult = true
    },
    onSubmit() {},
    fetchList() {},
    onSelectItem(imageItem) {
      this.$emit('select', imageItem)
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  background-color: white;
  width: 264px;
  height: 512px;
  overflow: scroll;
  padding-top: 66px;
}
.header {
  margin-bottom: 12px;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 18px;
}
.body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.category-list {
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.category-item {
  height: 64px;
  border: 1px solid #ECECEC;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  padding: 15px 12px;
  margin-bottom: 12px;
}
.category-item__caption {
  padding-left: 6px;
  width: calc(100% - 40px);
}
.category-item__title {
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}
.category-item__description {
  font-size: 12px;
  line-height: 17px;
  color: #939393;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-results {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform .3s ease-in-out;
  transform: translate3d(100%, 0, 0);
  background-color: #ffffff;
  overflow: hidden;
  padding-top: 30px;
  &.active {
    transform: translate3d(0, 0, 0);
  }
}
.search-results__head {
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  i, span, strong {
    line-height: 30px;
  }
  strong {
    color: #3121E6;
  }
}
.search-results__content {
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  .card-item {
    padding: 12px;
    border: 1px solid #EAEAEB;
    margin-bottom: 12px;
    .card-image {
      padding-top: 60%;
      background-color: #F7F9FA;
      background-size: contain;
    }
    .card-name {
      margin-top: 10px;
    }
  }
}
::v-deep {
  .el-input__inner {
    background-color: #F0F0F0;
  }
}
</style>
