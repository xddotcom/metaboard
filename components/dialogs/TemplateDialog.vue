<template>
  <el-dialog
    width="1000px"
    top="10vh"
    :fullscreen="false"
    :append-to-body="true"
    :modal-append-to-body="true"
    :visible.sync="isVisible"
    @open="onDialogOpen"
    @close="onDialogClose">
    <div class="inner">
      <div class="sidebar">
        <div
          v-for="cat in categoryList"
          :key="cat"
          class="category-item"
          :class="{ active: category === cat }"
          type="infor"
          plain
          round
          @click="category = cat"
        >{{ cat }}</div>
      </div>
      <div class="main">
        <el-row :gutter="10">
          <el-col
            v-for="item in itemList" :key="item.title"
            :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="item">
              <div class="item__cover" :style="getCardStyle(item)"></div>
              <div class="item__caption">
                <div class="item__title">{{ item.title }}</div>
                <div class="item__action"><i class="el-icon-plus" @click="() => onSelect(item.templateName)"></i></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'TemplateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: this.visible,
      category: '全部',
      categoryList: [
        '全部', 'Moodboard', '创意/摄影', '产品/设计',
        '插画/游戏', '电影/电视', '创业/项目', '会议/工作坊', '小说/剧本'
      ],
      itemList: [
        { templateName: 'a', title: '海报 Poster', image: 'https://up.img.heidiancdn.com/o_1fe33psaqs251jn311lg7mk1bfs0Poster.jpg' },
        { templateName: 'b', title: '摄影 Photography', image: 'https://up.img.heidiancdn.com/o_1fe33psb1ehip771ag123dhn80graphy.jpg'},
        { templateName: 'c', title: '视觉识别 VI Design', image: 'https://up.img.heidiancdn.com/o_1fe33psb21dcq15ptfn7jtpohj0Design.jpg'},
        { templateName: 'd', title: '插画 Illustration', image: 'https://up.img.heidiancdn.com/o_1fe33psb51l7f1e4h3cp1kkgtr20ration.jpg'},
        { templateName: 'e', title: '室内设计 Interior Design', image: 'https://up.img.heidiancdn.com/o_1fe33psb612njsd214531r2dgf90Design.jpg'},
        { templateName: 'f', title: '电影配色 Film Color', image: 'https://up.img.heidiancdn.com/o_1fe33psb81u4a10hua9n158d10fp0mColor.jpg'},
        { templateName: 'g', title: '时尚 Fashion', image: 'https://up.img.heidiancdn.com/o_1fe33psb91kip3kpq78lneetj007.jpg'},
        { templateName: 'h', title: '品牌', image: 'https://up.img.heidiancdn.com/o_1fe33psbaqe71a3cof0n5pite008.jpg'},
        { templateName: 'i', title: '网页', image: 'https://up.img.heidiancdn.com/o_1fe33psbbli81n1l1cmm1pamm4c009.jpg'},
      ]
    }
  },
  methods: {
    getCardStyle(item) {
      return {
        backgroundImage: `url(${item.image})`
      }
    },
    async onDialogOpen() {
      this.$emit('open')
      this.$emit('update:visible', true)
    },
    onDialogClose() {
      this.$emit('close')
      this.$emit('update:visible', false)
    },
    onSelect(name) {
      this.$emit('select', name)
    }
  },
}
</script>

<style lang="scss" scoped>
.inner {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-left: 180px;
  min-height:400px;
}
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 180px;
  overflow: auto;
  padding: 0 30px;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.category-item {
  width: 100%;
  display: block;
  cursor: pointer;
  color: #000000;
  height: 40px;
  line-height: 22px;
  padding: 9px 15px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid transparent;
  font-weight: 500;
  & + & {
    margin-top: 10px;
  }
  &.active {
    border-color: inherit;
  }
}
.item {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid;
  margin-bottom: 10px;
}
.item__cover {
  width: 100%;
  padding-top: percentage(15/22);
  background-color: #F5F5F5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.item__caption {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  font-weight: normal;
  border-top: 1px solid;
}
.item__action {
  cursor: pointer;
}
</style>

