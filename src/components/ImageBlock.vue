<template>
  <img v-editable="blok" class="img-fluid" :class="blok.css_class" v-lazy="optimizedImage" :alt="blok.alt_text">
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
    margin-bottom: 20px;
  }
</style>
