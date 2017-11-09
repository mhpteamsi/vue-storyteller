<template>
  <img v-editable="blok" :class="blok.css_class" :src="optimizedImage" alt="blok.alt_text">
</template>

<script>
  import Utility from '@/mixins/utility'
  export default {
    props: ['blok'],
    computed: {
      optimizedImage () {
        return this.resizeImage(this.blok.image, this.blok.width + 'x' + this.blok.height)
      }
    },
    mixins: [ Utility ]
  }
</script>

<style lang="scss" scoped>
  img {
    max-width: 100%;
    margin-bottom: 20px;
  }
</style>
