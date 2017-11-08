<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
  import marked from 'marked'

  export default {
    props: ['blok'],
    computed: {
      compiledMarkdown () {
        return marked(this.blok.body, { sanitize: true })
      }
    }
  }
</script>
