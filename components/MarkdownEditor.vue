<template>
  <div class="markdown-editor-wrapper">
    <editor-content :editor="editor"/>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

export default {
  name: 'MarkdownEditor',
  components: {
    EditorContent,
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Highlight,
        Typography,
        TaskList,
        TaskItem,
      ],
      content: this.value || '',
      onUpdate: ({ editor }) => {
        this.$emit('input', editor.getHTML())
      },
      onBlur: () => {
        console.log('@@@blur')
        this.$emit('blur')
      },
    })
  },
  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value
      if (isSame) {
        return
      }
      this.editor.commands.setContent(this.value, false)
    },
  },
  methods: {
    setFocus() {
      this.editor.chain().focus().run()
    },
    setEditable(payload) {
      this.editor.setEditable(!!payload)
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
.markdown-editor-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  > div {
    width: 100%;
    height: 100%;
  }
}
/* Basic editor styles */
.ProseMirror {
  height: 100%;
  width: 100%;
  border: none !important;
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }
  h1 {
    font-size: 2em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 1rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }
  ul[data-type=taskList] {
    list-style: none;
    padding: 0
  }

  ul[data-type=taskList] li {
    display: flex;
    align-items: center
  }

  ul[data-type=taskList] li>label {
    flex: 0 0 auto;
    margin-right: .5rem;
    display: flex;
    align-items: flex-start;
  }
}
.ProseMirror.ProseMirror-focused {
  border: none;
  outline: none;
}
</style>