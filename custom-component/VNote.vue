<template>
  <div class="v-note" :class="{ canEdit }" @keydown="handleKeydown" @keyup="handleKeyup" @dblclick="setEdit">
    <!-- tabindex >= 0 使得双击时聚集该元素 -->
    <client-only>
      <markdown-editor
        ref="mdEditor"
        :style="cachedElement.style"
        v-model="cachedElement.propValue"
        @blur="handleBlur"
        @input="handleInput"
      />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { keycodes } from '@/utils/shortcutKey.js'
import MarkdownEditor from '@/components/MarkdownEditor'
import { CompatSource } from 'webpack-sources';

export default {
  name: 'VNote',
  components: {
    MarkdownEditor
  },
  props: {
    element: {
      type: Object,
    },
    propValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      canEdit: false,
      ctrlKey: navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 91 : 17,
      isCtrlDown: false,
      cachedElement: {...this.element}
    }
  },
  computed: {
    ...mapState([
      'editMode',
    ]),
    editor() {
      return this.$refs.mdEditor ? this.$refs.mdEditor.editor : null
    }
  },
  watch: {
    'cachedElement.propValue': {
      handler(val = '') {
        this.$emit('input', this.element, val)
        this.$store.commit('updateComponentData', {
          ...this.cachedElement,
          propValue: val
        })
      }
    }
  },
  methods: {
    handleKeydown(e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = true
      } else if (this.isCtrlDown && this.canEdit && keycodes.includes(e.keyCode)) {
        e.stopPropagation()
      } else if (e.keyCode == 46) { // deleteKey
        e.stopPropagation()
      } else if (e.keyCode === 8 && this.canEdit) {
        e.stopPropagation()
      }
    },

    handleKeyup(e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = false
      }
    },

    handleInput(content) {
      this.$emit('input', this.element, content)
      this.$store.commit('updateComponentData', {
        ...this.cachedElement,
        propValue: content
      })
    },
    handleBlur() {
      this.cachedElement.propValue = this.cachedElement.propValue || '<br>'
      this.canEdit = false
      if (!this.editor) return
      this.editor.setEditable(false)
      this.editor.chain().blur().run()
    },
    setEdit(e) {
      if (this.element.isLock || !this.$refs.mdEditor || this.canEdit) {
        e.stopPropagation()
        return
      }
      this.canEdit = true
      if (!this.editor) return
      this.editor.setEditable(true)
      this.editor.chain().focus().run()
    }
  },
}
</script>

<style lang="scss" scoped>
.v-note {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: auto;
  &.canEdit {
    cursor: text;
    height: 100%;
  }
}

.preview {
  user-select: none;
}
</style>
