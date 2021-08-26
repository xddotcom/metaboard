<template>
  <div class="wrapper">
    <form class="search">
      <input type="textarea" name="" placeholder="搜索" class="search-input">
    </form>
    <div class="content">
      <div class="card-item" v-for="image in images" :key="image.title">
        <div
          class="card-image"
          :style="{'backgroundImage':`url(${image.src})`}"
        ></div>
        <div class="card-name">{{ image.title }}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  background-color: white;
  width: 264px;
  height: 512px;
  overflow: scroll;
  // border-radius: 4px;
  // box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
  .search {
    background: #F3F3F3;
    border: 1px solid #EAEAEB;
    padding: 8px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    .search-input {
      border: none;
      background-color: transparent;
    }
  }
  .content {
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
}
</style>
